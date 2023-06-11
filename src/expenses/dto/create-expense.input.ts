import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateExpenseInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  amount: number;

  @Field(() => Int)
  ownerId: number;
}
