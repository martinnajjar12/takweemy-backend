import { Module } from '@nestjs/common';
import { DatabaseModule } from '@takweemy/common';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
