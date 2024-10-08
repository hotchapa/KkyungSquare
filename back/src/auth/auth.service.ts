import {
  Injectable,
  Inject,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { SignUpCredentialsDto } from './dto/sign-up-credential.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signupCredentialsDTO: SignUpCredentialsDto): Promise<void> {
    return this.userRepository.createUser(signupCredentialsDTO);
  }

  async signIn(
    authCredentialsDTO: AuthCredentialsDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const { userId, password } = authCredentialsDTO;
    const user = await this.userRepository.findByuserId(userId);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { userId, sub: user.id }; // `sub` 클레임에 userId를 추가
      const accessToken = this.jwtService.sign(payload);
      const refreshToken = this.jwtService.sign(payload, {
        expiresIn: '7d',
      });
      return { accessToken, refreshToken };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async refreshToken(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const newAccessToken = this.jwtService.sign({
        userId: payload.userId,
      });
      const newRefreshToken = this.jwtService.sign(
        { userId: payload.userId },
        { expiresIn: '7d' },
      );
      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (e) {
      throw new ForbiddenException('Invalid refresh token');
    }
  }
}
