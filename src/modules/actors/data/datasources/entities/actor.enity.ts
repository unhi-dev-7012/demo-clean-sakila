import { ActorModel } from 'src/modules/actors/domain/models/actor.model';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('actor')
export class ActorEntity {
  @PrimaryColumn()
  actor_id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  last_update!: Date;

  toModel(): ActorModel {
    return new ActorModel(
      this.actor_id,
      this.first_name,
      this.last_name,
      this.last_update,
    );
  }
}
