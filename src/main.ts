import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
