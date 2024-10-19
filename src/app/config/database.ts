import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  connect: process.env.DB_CONNECTION,
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  synchronize: false,
  logging: process.env.DB_LOGGING === 'true',
  migrations: ['dist/migrations/*.js'],
  migrationsRun: false,
  relationLoadStrategy: 'query',
}));
