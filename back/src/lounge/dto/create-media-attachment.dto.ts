import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMediaAttachmentDto {
  @IsNotEmpty()
  @IsString()
  mediaType: string; // 예: "Image" 또는 "Video"

  @IsNotEmpty()
  @IsString()
  mediaUrl: string;

  @IsNotEmpty()
  @IsNumber()
  postId: number;
}
