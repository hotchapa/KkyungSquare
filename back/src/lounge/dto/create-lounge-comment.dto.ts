import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLoungeCommentDto {
  @IsNotEmpty()
  @IsString()
  commentText: string;

  @IsNotEmpty()
  @IsNumber()
  postId: number;
}
