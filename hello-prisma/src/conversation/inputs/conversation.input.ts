import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class ConversationInput {
  
  @Field()
  readonly message: string;
  
  @Field()
  readonly from: string;

  @Field()
  readonly to: string;

}
