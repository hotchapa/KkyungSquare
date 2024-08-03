// users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User 엔티티를 사용할 수 있게 등록
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
