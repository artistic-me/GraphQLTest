import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ConversationType {
    @Field()
    readonly id: number;
    
    @Field()
    readonly message: string;
    
    @Field()
    readonly from: string;

    @Field()
    readonly to: string;

}
