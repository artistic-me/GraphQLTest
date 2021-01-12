import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppointmentType {
    @Field()
    readonly id: number;
    
    @Field()
    readonly title: string;
    
    @Field()
    readonly content: string;

    @Field()
    readonly apptmtdate: Date;

}