import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@takweemy/common';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('simple-array')
  roles: string[];
}
