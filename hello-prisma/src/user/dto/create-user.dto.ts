import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
    @Field()
    readonly id: number;
    
    @Field()
    readonly name: string;
    
    @Field()
    readonly email: string;

    @Field()
    readonly healthID: string;

    @Field()
    readonly insuranceID?: string;

}
