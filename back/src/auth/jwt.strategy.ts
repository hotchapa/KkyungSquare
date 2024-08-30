import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserRepository } from './user.repository';
import { jwtConfig } from 'src/config/jwt.config';
import { Inject } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('UserRepository') // @InjectRepository 대신 @Inject를 사용
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.jwtSecret,
    });
  }

  async validate(payload: { username: string; sub: number }) {
    const { username, sub: userId } = payload; // 페이로드에서 userId를 추출
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user || user.username !== username) {
      throw new UnauthorizedException();
    }

    return user; // 여기서 반환된 user가 req.user에 담김
  }
}
