import { Controller, UseGuards, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '../user/user.decorator';
import { AuthUserDto } from '../user/dto/auth-user.dto';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBearerAuth()
  @UseGuards(FacebookAuthGuard)
  @Post('login')
  async login(@User() user: AuthUserDto, @Res() response: Response) {
    const cookie = await this.authService.loginOrRegister(user);
    response.setHeader('Set-Cookie', cookie);
    return response.send(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Res() response: Response) {
    const cookie = await this.authService.logout();
    response.setHeader('Set-Cookie', cookie);
    return response.sendStatus(200);
  }
}
