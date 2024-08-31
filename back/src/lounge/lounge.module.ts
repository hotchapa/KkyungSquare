import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoungePostService } from './lounge-post.service';
import { LoungePostController } from './lounge-post.controller';
import { LoungePostRepositoryProvider } from './lounge-post.repository';
import { LoungeCommentService } from './lounge-comment.service';
import { LoungeCommentController } from './lounge-comment.controller';
import { LoungeCommentRepositoryProvider } from './lounge-comment.repository';
import { MediaAttachmentService } from './media-attachment.service';
import { MediaAttachmentController } from './media-attachment.controller';
import { MediaAttachmentRepositoryProvider } from './media-attachment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [
    LoungePostController,
    LoungeCommentController,
    MediaAttachmentController,
  ],
  providers: [
    LoungePostService,
    LoungeCommentService,
    MediaAttachmentService,
    LoungePostRepositoryProvider,
    LoungeCommentRepositoryProvider,
    MediaAttachmentRepositoryProvider,
  ],
})
export class LoungeModule {}
