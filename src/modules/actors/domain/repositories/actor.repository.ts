import { ActorModel } from '../models/actor.model';

export abstract class ActorRepository {
  abstract create(actor: ActorModel): Promise<void>;
  abstract getMaxId(): Promise<number>;
  abstract findOne(id: number): Promise<ActorModel | null>;
}
