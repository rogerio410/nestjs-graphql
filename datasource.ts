// import { User } from 'src/users/entities/user.entity';

import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nestjs_graphql',
  // entities: [User],
  synchronize: false,
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
