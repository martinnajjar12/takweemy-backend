import { Module } from '@nestjs/common';
import { DatabaseModule, LoggerModule } from '@takweemy/common';

import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationsRespository } from './reservations.repository';

import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Reservation]),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRespository],
})
export class ReservationsModule {}
