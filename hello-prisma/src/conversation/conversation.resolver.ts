import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { ConversationType } from './dto/create-conversation.dto';
import { ConversationService } from './conversation.service';
import { ConversationInput } from './inputs/conversation.input';

@Resolver()
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Query(() => [ConversationType])
  async conversations() {
    return await this.conversationService.conversations({});
  }

  @Mutation(() => ConversationType)
  async createConversation(@Args('input') input: ConversationInput) {
    return this.conversationService.createConversation(input);
  }

}
