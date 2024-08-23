import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AbstractRepository, User } from '@takweemy/common';

import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(
    @InjectRepository(User)
    userRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(userRepository, entityManager);
  }
}
