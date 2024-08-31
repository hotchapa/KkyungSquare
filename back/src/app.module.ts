import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { LoungeModule } from './lounge/lounge.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), AuthModule, LoungeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
