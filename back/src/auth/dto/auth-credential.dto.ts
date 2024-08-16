import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsEmail,
} from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '비밀번호는 영어와 숫자만 가능합니다.',
  })
  password: string;

  @IsEmail({}, { message: '유효한 이메일 주소를 입력하세요.' })
  email: string;
}
