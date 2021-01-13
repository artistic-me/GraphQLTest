import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 try {
   await app.listen(443, () => { console.log(`server running at port ${443}`) })
} catch (error) {
    console.log(error)
}
}
bootstrap();
