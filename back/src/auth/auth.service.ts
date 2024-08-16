import { Injectable, Inject } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async signUp(authCredentialsDTO: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDTO);
  }
}
