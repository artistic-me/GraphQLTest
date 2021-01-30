import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

import {
  Conversation,
  ConversationCreateInput,
  ConversationWhereUniqueInput,
  ConversationWhereInput,
  ConversationOrderByInput,
} from '@prisma/client';

@Injectable()
export class ConversationService {
  constructor(private prisma: PrismaService) {}

  async conversations(params: {
    skip?: number;
    take?: number;
    cursor?: ConversationWhereUniqueInput;
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByInput;
  }): Promise<Conversation[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.conversation.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createConversation(data: ConversationCreateInput): Promise<Conversation> {
    return this.prisma.conversation.create({
      data,
    });
  }
}