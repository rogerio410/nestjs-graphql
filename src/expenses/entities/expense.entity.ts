import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

enum ExpenseStatusEnum {
  OPEN,
  PAID,
}

registerEnumType(ExpenseStatusEnum, {
  name: 'ExpenseStatusEnum',
});

@ObjectType()
@Entity()
export class Expense {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column('decimal', {
    precision: 6,
    scale: 2,
    default: 0,
  })
  amount: number;

  @Field(() => ExpenseStatusEnum, { defaultValue: ExpenseStatusEnum.OPEN })
  @Column({
    type: 'enum',
    enum: ExpenseStatusEnum,
    default: ExpenseStatusEnum.OPEN,
  })
  status: ExpenseStatusEnum;

  @ManyToOne(() => User, (user) => user.expenses, {
    eager: true,
    cascade: true,
  })
  owner: User;
}
