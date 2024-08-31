import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; // TypeORM의 Repository를 가져옵니다.
import { LoungePost } from './entities/lounge-post.entity';
import { CreateLoungePostDto } from './dto/create-lounge-post.dto';

@Injectable()
export class LoungePostService {
  constructor(
    @InjectRepository(LoungePost)
    private loungePostRepository: Repository<LoungePost>, // 여기서 Repository를 사용
  ) {}

  async createPost(
    createPostDto: CreateLoungePostDto,
    user,
  ): Promise<LoungePost> {
    const post = this.loungePostRepository.create({
      ...createPostDto,
      user,
    });
    await this.loungePostRepository.save(post);
    return post;
  }

  async findAll(): Promise<LoungePost[]> {
    return this.loungePostRepository.find();
  }

  async findOne(id: number): Promise<LoungePost> {
    return this.loungePostRepository.findOne({ where: { id } });
  }

  async updatePost(
    id: number,
    updatePostDto: Partial<LoungePost>,
  ): Promise<LoungePost> {
    await this.loungePostRepository.update(id, updatePostDto);
    return this.findOne(id);
  }

  async removePost(id: number): Promise<void> {
    await this.loungePostRepository.delete(id);
  }
}
