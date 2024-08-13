import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@takweemy/common';

@Entity()
export class Reservation extends AbstractEntity<Reservation> {
  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  reserverId: string;

  @Column()
  businessId: string;

  @Column()
  businessOwnerId: string;

  @Column()
  reserveeId: string;
}
