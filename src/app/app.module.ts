import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import database from './config/database';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { AppController } from './app/app.controller';
import { GetInformationUsecase } from './domain/usecases/get-information-usecase';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [database] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configservice: ConfigService) =>
        configservice.get<TypeOrmModuleOptions>(
          'database',
        ) as TypeOrmModuleOptions,
      async dataSourceFactory(option) {
        if (!option) throw new Error('Invalid options passed');
        return addTransactionalDataSource(new DataSource(option));
      },
    }),
  ],

  controllers: [AppController],
  providers: [GetInformationUsecase],
  exports: [],
})
export class AppModule {}
