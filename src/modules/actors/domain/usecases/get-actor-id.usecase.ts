import { Injectable } from '@nestjs/common';
import { ActorModel } from '../models/actor.model';
import { ActorRepository } from '../repositories/actor.repository';

@Injectable()
export class GetActorIdUsecase {
  constructor(private readonly actorRepository: ActorRepository) {}
  async execute(id: number): Promise<ActorModel | null> {
    return await this.actorRepository.findOne(id);
  }
}
