import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

const users: User[] = [
  {
    id: 1,
    email: 'rogerio410@gmail.com',
    name: 'Rogério Silva',
    password: '12365',
  },
];

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(request: CreateUserInput) {
    return this.usersRepo.save(request);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  async findOne(id: number) {
    const findUser = await this.usersRepo.findOne({ where: { id } });
    if (!findUser) throw new NotFoundException('User not found!');
    return findUser;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const findUser = await this.usersRepo.findOne({ where: { id } });
    if (!findUser) throw new NotFoundException('User not found!');

    return this.usersRepo.save(updateUserInput);
  }

  async remove(id: number) {
    const findUser = await this.usersRepo.findOne({ where: { id } });
    if (!findUser) throw new NotFoundException('User not found!');
    this.usersRepo.remove([findUser]);
    return;
  }
}
