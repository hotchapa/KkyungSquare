import { Repository, DataSource } from 'typeorm';
import { MediaAttachment } from './entities/media-attachment.entity';

export class MediaAttachmentRepository extends Repository<MediaAttachment> {
  constructor(private dataSource: DataSource) {
    super(MediaAttachment, dataSource.createEntityManager());
  }

  async findAttachmentsByPost(postId: number): Promise<MediaAttachment[]> {
    return this.find({ where: { post: { id: postId } } });
  }
}

export const MediaAttachmentRepositoryProvider = {
  provide: 'MediaAttachmentRepository',
  useFactory: (dataSource: DataSource) => {
    return new MediaAttachmentRepository(dataSource);
  },
  inject: [DataSource],
};
