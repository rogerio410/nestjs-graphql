// import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5430,
  username: 'docker',
  password: 'docker',
  database: 'nestjs_graphql',
  entities: ['**/entities/*.entity.{js,ts}'],
  migrations: ['**/migrations/*.{js,ts}'],
  synchronize: false,
});

appDataSource
  .initialize()
  .then(() => {
    console.log('TypeORM Datasource -> Initialized!');
  })
  .catch(() => {
    console.log('TypeORM Datasource -> Error on initilize');
  });
