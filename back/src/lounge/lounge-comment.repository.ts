import { Repository, DataSource } from 'typeorm';
import { LoungeComment } from './entities/lounge-comment.entity';

export class LoungeCommentRepository extends Repository<LoungeComment> {
  constructor(private dataSource: DataSource) {
    super(LoungeComment, dataSource.createEntityManager());
  }

  async findCommentsByPost(postId: number): Promise<LoungeComment[]> {
    return this.find({ where: { post: { id: postId } } });
  }
}

export const LoungeCommentRepositoryProvider = {
  provide: 'LoungeCommentRepository',
  useFactory: (dataSource: DataSource) => {
    return new LoungeCommentRepository(dataSource);
  },
  inject: [DataSource],
};
