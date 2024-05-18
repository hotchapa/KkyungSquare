import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UsersModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 데이터베이스 타입
      host: '127.0.0.1', // 데이터베이스 호스트 (Docker 사용 시 도커 컴포즈 서비스 이름 사용)
      port: 3306, // MySQL 포트
      username: 'root', // 사용자 이름
      password: '1234', // 비밀번호
      database: 'test', // 데이터베이스 이름
      entities: [User], // 엔티티 파일 위치
      synchronize: true, // 개발용으로만 true로 설정, 프로덕션에서는 false 권장
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
