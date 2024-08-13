import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@takweemy/common';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  confirmPassword: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('simple-array')
  roles: string[];
}
