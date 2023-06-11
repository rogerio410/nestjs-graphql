import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateExpenseInput } from './create-expense.input';

@InputType()
export class UpdateExpenseInput extends PartialType(CreateExpenseInput) {
  @Field(() => Int)
  id: number;
}
