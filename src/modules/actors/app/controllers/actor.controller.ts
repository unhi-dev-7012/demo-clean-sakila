import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateActorUsecase } from '../../domain/usecases/create-actor.usecase';
import { CreateActorDto, finrOneActorDto } from '../dto/actor.dto';
import { Response } from 'express';
import { GetActorIdUsecase } from '../../domain/usecases/get-actor-id.usecase';

@Controller('api/user/v1/actors')
export class ActorController {
  constructor(
    private readonly creatActorUsecase: CreateActorUsecase,
    private readonly getActorIdUsecase: GetActorIdUsecase,
  ) {}
  @Post('/')
  async create(@Body() body: CreateActorDto, @Res() res: Response) {
    const actor = await this.creatActorUsecase.execute(
      body.first_name,
      body.last_name,
    );
    res.status(HttpStatus.CREATED).json(actor.toJson());
  }

  @Get('/:id')
  async findOne(@Param() params: finrOneActorDto, @Res() res: Response) {
    const actor = await this.getActorIdUsecase.execute(params.actor_id);
    if (!actor) res.status(HttpStatus.NOT_FOUND);
    res.status(HttpStatus.OK).json(actor.toJson());
  }
}
