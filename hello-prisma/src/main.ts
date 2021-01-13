import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 try {
   await app.listen(3000, "0.0.0.0");
} catch (error) {
    console.log(error)
}
}
bootstrap();
