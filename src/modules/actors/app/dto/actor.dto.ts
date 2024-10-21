import { PickType } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Length } from 'class-validator';
import { first } from 'rxjs';

export class ActorDto {
  @IsInt()
  actor_id!: number;

  @IsString()
  @Length(1, 45, { message: 'First name must be less than 45 characters' })
  first_name!: string;

  @IsString()
  @Length(1, 45, { message: 'Last name must be less than 45 characters' })
  last_name!: string;
}

export class CreateActorDto extends PickType(ActorDto, [
  'first_name',
  'last_name',
]) {}

export class finrOneActorDto extends PickType(ActorDto, ['actor_id']) {
  id(id: any) {
    throw new Error('Method not implemented.');
  }
}
