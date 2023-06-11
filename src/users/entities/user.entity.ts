import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Expense } from '../../expenses/entities/expense.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column({ nullable: false })
  email: string;

  @Field()
  @Column()
  password: string;

  @Field(() => [Expense], { defaultValue: [] })
  @OneToMany(() => Expense, (expense) => expense.owner, {
    lazy: true,
  })
  expenses: Expense[];
}
