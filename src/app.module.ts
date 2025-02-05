
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import { CloudStorageAppModule } from './modules/cloud-storage-app/cloud-storage-app.module';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CloudStorageAppModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
// Established connection to database

export const dbConnection = new DataSource(dbConfig());
dbConnection
  .initialize()
  .then(() => {
    console.log(
      `Data Source has been initialized! "${process.env.DB_HOST},${process.env.DB_USERNAME},${process.env.DB_PASSWORD}"`,
    );
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
