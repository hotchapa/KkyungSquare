import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { LoungePost } from './lounge-post.entity';

@Entity()
export class MediaAttachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mediaType: string; // Image or Video

  @Column()
  mediaUrl: string;

  @ManyToOne(() => LoungePost, { eager: false })
  post: LoungePost;

  @CreateDateColumn()
  createdAt: Date;
}
