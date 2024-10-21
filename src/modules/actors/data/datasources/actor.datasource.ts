import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActorEntity } from './entities/actor.enity';
import { Repository } from 'typeorm';
import { ActorModel } from '../../domain/models/actor.model';

@Injectable()
export class ActorDatasource {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorsRepository: Repository<ActorEntity>,
  ) {}

  async create(actor: ActorModel): Promise<void> {
    const enity = new ActorEntity();

    enity.actor_id = actor.actorId;
    enity.first_name = actor.firstName;
    enity.last_name = actor.lastName;
    enity.last_update = actor.lastUpdate;

    await this.actorsRepository.insert(enity);
  }
  async getMaxId(): Promise<number> {
    return (await this.actorsRepository.maximum('actor_id')) || 0;
  }
  async findOne(id: number): Promise<ActorModel | null> {
    const entity = await this.actorsRepository.findOne({
      where: { actor_id: id },
    });
    return entity.toModel();
  }
}
