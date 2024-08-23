import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from '@takweemy/common';

import { UsersRepository } from './users.repository';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    await this.validateCreateUserDto(createUserDto);

    const user = new User({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });

    return this.usersRepository.create(user);
  }

  private async validateCreateUserDto(createUserDto: CreateUserDto) {
    try {
      await this.usersRepository.findOne({
        phoneNumber: createUserDto.phoneNumber,
      });
    } catch {
      return;
    }

    throw new UnprocessableEntityException('Phone number already exists.');
  }

  async verifyUser(phoneNumber: string, password: string) {
    const user = await this.usersRepository.findOne({ phoneNumber });
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return user;
  }

  async getUser(getUserDto: GetUserDto) {
    return this.usersRepository.findOne(getUserDto);
  }
}
