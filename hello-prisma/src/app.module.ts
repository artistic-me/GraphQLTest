import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppointmentModule} from './appointment/appointment.module';
import { ConversationModule } from './conversation/conversation.module';
import {UserModule} from './user/user.module';

@Module({
  imports: [
    AppointmentModule,
    UserModule,
    ConversationModule,
    GraphQLModule.forRoot({
      include: [
        AppointmentModule,
        UserModule,
        ConversationModule
      ],
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ headers: req.headers, body: req.body }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
