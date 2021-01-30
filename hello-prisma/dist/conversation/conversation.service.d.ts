import { PrismaService } from './../prisma.service';
import { Conversation, ConversationCreateInput, ConversationWhereUniqueInput, ConversationWhereInput, ConversationOrderByInput } from '@prisma/client';
export declare class ConversationService {
    private prisma;
    constructor(prisma: PrismaService);
    conversations(params: {
        skip?: number;
        take?: number;
        cursor?: ConversationWhereUniqueInput;
        where?: ConversationWhereInput;
        orderBy?: ConversationOrderByInput;
    }): Promise<Conversation[]>;
    createConversation(data: ConversationCreateInput): Promise<Conversation>;
}
