import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LoungePost } from './lounge-post.entity';
import { User } from 'src/auth/user.entity';

@Entity()
export class LoungeComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  commentText: string;

  @ManyToOne(() => LoungePost, { eager: false })
  post: LoungePost;

  @ManyToOne(() => User, { eager: false })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
