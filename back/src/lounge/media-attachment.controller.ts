import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { MediaAttachmentService } from './media-attachment.service';
import { CreateMediaAttachmentDto } from './dto/create-media-attachment.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('media-attachment')
export class MediaAttachmentController {
  constructor(
    private readonly mediaAttachmentService: MediaAttachmentService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createMediaAttachmentDto: CreateMediaAttachmentDto) {
    return this.mediaAttachmentService.createAttachment(
      createMediaAttachmentDto,
    );
  }
}
