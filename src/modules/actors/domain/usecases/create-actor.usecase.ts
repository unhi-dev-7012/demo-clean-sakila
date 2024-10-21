import { Injectable } from '@nestjs/common';
import { ActorRepository } from '../repositories/actor.repository';
import { ActorModel } from '../models/actor.model';

@Injectable()
export class CreateActorUsecase {
  constructor(private readonly actorRepository: ActorRepository) {}

  public async execute(firstName: string, lastName: string) {
    const maxId = await this.actorRepository.getMaxId();

    const actor = new ActorModel(maxId + 1, firstName, lastName, new Date());
    await this.actorRepository.create(actor);

    return actor;
  }
}
