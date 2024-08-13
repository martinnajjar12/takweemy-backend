import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User({
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.usersRepository.create(user);
  }

  async findAll() {
    return this.usersRepository.find({});
  }
}
