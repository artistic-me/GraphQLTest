import { ConversationService } from './conversation.service';
import { ConversationInput } from './inputs/conversation.input';
export declare class ConversationResolver {
    private readonly conversationtService;
    constructor(conversationtService: ConversationService);
    conversations(): Promise<import(".prisma/client").Conversation[]>;
    createConversation(input: ConversationInput): Promise<import(".prisma/client").Conversation>;
}
