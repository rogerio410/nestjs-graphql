import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expensesRepo: Repository<Expense>,
  ) {}

  async create(createExpenseInput: CreateExpenseInput) {
    return this.expensesRepo.save({
      ...createExpenseInput,
      owner: { id: createExpenseInput.ownerId },
    });
  }

  findAll() {
    return this.expensesRepo.find();
  }

  async findOne(id: number) {
    const findExpense = await this.expensesRepo.findOne({ where: { id } });
    if (!findExpense) {
      throw new NotFoundException('Expense not found!');
    }

    return findExpense;
  }

  async update(id: number, updateExpenseInput: UpdateExpenseInput) {
    const findExpense = await this.findOne(id);
    return this.expensesRepo.save(findExpense);
  }

  async remove(id: number) {
    const findExpense = await this.findOne(id);
    this.expensesRepo.remove([findExpense]);
    return findExpense;
  }
}
