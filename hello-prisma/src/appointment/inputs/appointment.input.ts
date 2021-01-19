import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class AppointmentInput {
  
  @Field()
  readonly title: string;
  
  @Field()
  readonly content: string;

  @Field()
  readonly apptmtdate: Date;
  
  @Field()
  readonly healthID: string;
}
