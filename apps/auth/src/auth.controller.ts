import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { User } from '@takweemy/common';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(user, response);
    response.send(jwt);
  }

  // @UseGuards(JwtAuthGuard)
  // @MessagePattern('authenticate')
  // async authenticate(@Payload() data: any) {
  //   return data.user;
  // }
}
