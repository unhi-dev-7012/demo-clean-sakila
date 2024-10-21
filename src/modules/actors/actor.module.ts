import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './data/datasources/entities/actor.enity';
import { ActorController } from './app/controllers/actor.controller';
import { ActorRepository } from './domain/repositories/actor.repository';
import { ActorRepositoryImpl } from './data/repositories/actor.repository.impl';
import { ActorDatasource } from './data/datasources/actor.datasource';
import { CreateActorDto } from './app/dto/actor.dto';
import { CreateActorUsecase } from './domain/usecases/create-actor.usecase';
import { GetActorIdUsecase } from './domain/usecases/get-actor-id.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
  controllers: [ActorController],
  providers: [
    {
      provide: ActorRepository,
      useClass: ActorRepositoryImpl,
    },
    ActorDatasource,
    CreateActorUsecase,
    GetActorIdUsecase,
  ],
  exports: [],
})
export class ActorModule {}
