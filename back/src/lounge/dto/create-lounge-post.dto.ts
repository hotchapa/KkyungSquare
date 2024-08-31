import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLoungePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
