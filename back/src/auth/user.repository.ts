import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { SignUpCredentialsDto } from './dto/sign-up-credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  // 회원가입 (사용자 생성)
  async createUser(signupCredentialsDTO: SignUpCredentialsDto): Promise<void> {
    const { username, password, email } = signupCredentialsDTO;

    // 비밀번호 해싱
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({
      username,
      email,
      password: hashedPassword,
    });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('유저네임이 이미 존재합니다');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  // 회원탈퇴 (사용자 삭제)
  async deleteUser(userId: number): Promise<void> {
    await this.delete(userId);
  }

  // 특정 사용자 조회
  async findByUsername(username: string): Promise<User | undefined> {
    return this.findOne({ where: { username } });
  }

  // 이메일로 사용자 조회
  async findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } });
  }
}

// Repository를 확장하는 함수로 정의
export const UserRepositoryProvider = {
  provide: 'UserRepository',
  useFactory: (dataSource: DataSource) => {
    return new UserRepository(dataSource);
  },
  inject: [DataSource],
};
