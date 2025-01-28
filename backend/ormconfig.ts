import { DataSource } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: ".env"})

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  migrationsRun: false,
  migrations: ['dist/src/database/migrations/*.js'],
  migrationsTableName: 'migrationHistory',
});
