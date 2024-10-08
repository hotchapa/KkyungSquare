import {
  Body,
  Post,
  Controller,
  ValidationPipe,
  Res,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { SignUpCredentialsDto } from './dto/sign-up-credential.dto';
import { Response, Request } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) signupcredentialsDto: SignUpCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(signupcredentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ accessToken: string }> {
    const tokens = await this.authService.signIn(authcredentialsDto);
    response.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return { accessToken: tokens.accessToken };
  }

  @Get('/refresh')
  async refreshToken(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ accessToken: string }> {
    console.log('받아오긴하니?.');
    const refreshToken = request.cookies['refreshToken'];
    console.log('지금부터 테스트 들어간다.');
    console.log('Received refreshToken:', refreshToken);
    const tokens = await this.authService.refreshToken(refreshToken);
    response.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return { accessToken: tokens.accessToken };
  }

  @Post('/signout')
  async signOut(@Res({ passthrough: true }) response: Response): Promise<void> {
    response.cookie('refreshToken', '', {
      httpOnly: true,
      expires: new Date(0),
    });
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req) {
    return req.user;
  }
}
