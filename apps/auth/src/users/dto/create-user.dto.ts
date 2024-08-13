import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

import { IsValidRoleArray } from '@takweemy/common';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsStrongPassword()
  password: string;

  @IsStrongPassword()
  confirmPassword: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsValidRoleArray()
  roles: string[];
}
