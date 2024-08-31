import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoungeComment } from './entities/lounge-comment.entity';
import { CreateLoungeCommentDto } from './dto/create-lounge-comment.dto';

@Injectable()
export class LoungeCommentService {
  constructor(
    @InjectRepository(LoungeComment)
    private commentRepository: Repository<LoungeComment>, // Repository로 대체
  ) {}

  async createComment(
    createCommentDto: CreateLoungeCommentDto,
    user,
    post,
  ): Promise<LoungeComment> {
    const comment = this.commentRepository.create({
      ...createCommentDto,
      user,
      post,
    });
    await this.commentRepository.save(comment);
    return comment;
  }

  async findAll(): Promise<LoungeComment[]> {
    return this.commentRepository.find();
  }

  async findOne(id: number): Promise<LoungeComment> {
    return this.commentRepository.findOne({ where: { id } });
  }

  async removeComment(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
