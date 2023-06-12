export default () => ({
  database: {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT, 10) || 5432,
    database: process.env.PG_DATABASE,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    autoLoadEntities: true,
    synchronize: false,
  },
});

/*
export default () => ({
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'nestjs_graphql',
    autoLoadEntities: true,
    synchronize: false,
  },
});
*/
