// import { User } from 'src/users/entities/user.entity';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import typeormConfig from './src/config/typeorm.config';

dotenvConfig({ debug: true });
const config = typeormConfig().database as DataSourceOptions;

export const appDataSource = new DataSource({
  ...config,
  entities: ['**/entities/*.entity.{js,ts}'],
  migrations: ['**/migrations/*.{js,ts}'],
});

appDataSource
  .initialize()
  .then(() => {
    console.log('TypeORM Datasource -> Initialized!');
  })
  .catch(() => {
    console.log('TypeORM Datasource -> Error on initilize');
  });
