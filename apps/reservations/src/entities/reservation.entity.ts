import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@takweemy/common';

@Entity()
export class Reservation extends AbstractEntity<Reservation> {
  @Column()
  timestamp: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: string;

  @Column()
  businessId: string;

  @Column()
  businessOwnerId: string;
}
