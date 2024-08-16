import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  // imports: [
  //   ConfigModule.forRoot({
  //     isGlobal: true, // 전역 모듈로 설정
  //     envFilePath: '.env', // .env 파일 사용
  //   }),
  // ],
  imports: [TypeOrmModule.forRoot(typeORMConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
