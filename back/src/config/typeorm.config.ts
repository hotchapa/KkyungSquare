import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'zmfmdjgm0',
  database: 'kkyung_local_db',
  entities: [
    __dirname + '/../**/*.entity.{js,ts}',
    __dirname + '/../**/entities/*.entity.{js,ts}',
  ],
  synchronize: true,
};
