import { Controller, Get } from '@nestjs/common';
import { GetInformationUsecase } from '../domain/usecases/get-information-usecase';

@Controller()
export class AppController {
  constructor(private readonly getInformationUsecase: GetInformationUsecase) {}
  @Get()
  public getHello() {
    return this.getInformationUsecase.getHello();
  }
}
