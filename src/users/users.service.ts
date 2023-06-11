import { Injectable } from '@nestjs/common';
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
  create(request: CreateUserInput) {
    const newUser = { ...request, id: 2 };
    users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
