import { Repository, DataSource } from 'typeorm';
import { LoungePost } from './entities/lounge-post.entity';

export class LoungePostRepository extends Repository<LoungePost> {
  constructor(private dataSource: DataSource) {
    super(LoungePost, dataSource.createEntityManager());
  }

  async findPostsByUser(userId: number): Promise<LoungePost[]> {
    return this.find({ where: { user: { id: userId } } });
  }
}

export const LoungePostRepositoryProvider = {
  provide: 'LoungePostRepository',
  useFactory: (dataSource: DataSource) => {
    return new LoungePostRepository(dataSource);
  },
  inject: [DataSource],
};
