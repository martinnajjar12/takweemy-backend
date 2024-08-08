import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule } from '@takweemy/common';
import { Reservation } from './entities/reservation.entity';
import { ReservationsRespository } from './reservations.repository';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Reservation])],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRespository],
})
export class ReservationsModule {}
