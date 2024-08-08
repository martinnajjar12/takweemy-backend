import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@takweemy/common';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ReservationsRespository extends AbstractRepository<Reservation> {
  protected readonly logger = new Logger(ReservationsRespository.name);

  constructor(
    @InjectRepository(Reservation)
    reservationsRespository: Repository<Reservation>,
    entityManager: EntityManager,
  ) {
    super(reservationsRespository, entityManager);
  }
}
