import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaAttachment } from './entities/media-attachment.entity';
import { CreateMediaAttachmentDto } from './dto/create-media-attachment.dto';
import { LoungePost } from './entities/lounge-post.entity';

@Injectable()
export class MediaAttachmentService {
  constructor(
    @InjectRepository(MediaAttachment)
    private attachmentRepository: Repository<MediaAttachment>, // Repository로 대체
    @InjectRepository(LoungePost)
    private postRepository: Repository<LoungePost>, // Repository로 대체
  ) {}

  async createAttachment(
    createAttachmentDto: CreateMediaAttachmentDto,
  ): Promise<MediaAttachment> {
    const { postId, mediaType, mediaUrl } = createAttachmentDto;
    const post = await this.postRepository.findOne({ where: { id: postId } });

    if (!post) {
      throw new Error('Post not found');
    }

    const attachment = this.attachmentRepository.create({
      mediaType,
      mediaUrl,
      post,
    });

    await this.attachmentRepository.save(attachment);
    return attachment;
  }

  async findAll(): Promise<MediaAttachment[]> {
    return this.attachmentRepository.find();
  }

  async findOne(id: number): Promise<MediaAttachment> {
    return this.attachmentRepository.findOne({ where: { id } });
  }

  async removeAttachment(id: number): Promise<void> {
    await this.attachmentRepository.delete(id);
  }
}
