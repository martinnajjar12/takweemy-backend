import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

import { IsValidRoleArray } from '@takweemy/common';

export class CreateUserDto {
  @IsPhoneNumber()
  phoneNumber: string;

  @IsStrongPassword()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsValidRoleArray()
  roles: string[];
}
