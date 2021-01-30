import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationResolver } from './conversation.resolver';
import { PrismaService } from '../prisma.service';
@Module({
  imports: [],
  providers: [PrismaService, ConversationService, ConversationResolver]
})
export class ConversationModule {}
