import { Injectable } from '@nestjs/common';

@Injectable()
export class GetInformationUsecase {
  public getHello(): string {
    return 'this is demo';
  }
}
