import { Injectable } from '@nestjs/common';
import { ActorRepository } from '../../domain/repositories/actor.repository';
import { ActorDatasource } from '../datasources/actor.datasource';
import { ActorModel } from '../../domain/models/actor.model';

@Injectable()
export class ActorRepositoryImpl implements ActorRepository {
  constructor(private readonly actorDatasource: ActorDatasource) {}
  async create(actor: ActorModel): Promise<void> {
    await this.actorDatasource.create(actor);
  }
  async getMaxId(): Promise<number> {
    return await this.actorDatasource.getMaxId();
  }
  async findOne(id: number): Promise<ActorModel | null> {
    return await this.actorDatasource.findOne(id);
  }
}
