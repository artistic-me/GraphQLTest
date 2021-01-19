import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  
  @Field()
  readonly email: string;
  
  @Field()
  readonly name: string;

  @Field()
  readonly healthID: string;
  
  @Field()
  readonly insuranceID?: string;

}
