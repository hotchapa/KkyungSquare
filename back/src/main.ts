import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser()); // 쿠키 파서 미들웨어 적용

  // CORS 설정
  app.enableCors({
    origin: 'http://localhost:3000', // 요청을 허용할 도메인
    credentials: true, // 쿠키를 포함한 요청 허용
  });

  await app.listen(9010, '0.0.0.0'); // 모든 네트워크 인터페이스에서 접속을 허용
}
bootstrap();
