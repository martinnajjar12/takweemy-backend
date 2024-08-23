import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({ usernameField: 'phoneNumber' });
  }

  async validate(phoneNumber: string, password: string) {
    try {
      return await this.usersService.verifyUser(phoneNumber, password);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
