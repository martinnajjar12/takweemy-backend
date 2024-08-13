import { registerDecorator, ValidationOptions } from 'class-validator';

const userRole = ['businessOwner', 'employee', 'customer'];

export function IsValidRoleArray(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidRoleArray',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any[]) {
          if (!Array.isArray(value)) {
            return false;
          }
          return value.every((role) => userRole.includes(role));
        },
        defaultMessage() {
          return `Each role must be one of the following: ${userRole.join(', ')}`;
        },
      },
    });
  };
}
