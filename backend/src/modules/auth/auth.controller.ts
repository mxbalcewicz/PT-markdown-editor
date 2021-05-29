import { Controller, UseGuards, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '../user/user.decorator';
import { User as UserModel } from '../user/user.schema';
import { AuthUserDto } from '../user/dto/auth-user.dto';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBearerAuth()
  @UseGuards(FacebookAuthGuard)
  @Post('login')
  async login(@User() user: AuthUserDto, @Res() response: Response) {
    const {
      refreshTokenCookie,
      accessToken,
    } = await this.authService.loginOrRegister(user);
    response.setHeader('Set-Cookie', refreshTokenCookie);
    return response.send({ accessToken });
  }

  @ApiBearerAuth()
  @UseGuards(JwtRefreshAuthGuard)
  @Post('logout')
  async logout(@Res() response: Response) {
    const cookie = await this.authService.createNoAuthCookie();
    response.setHeader('Set-Cookie', cookie);
    return response.sendStatus(200);
  }

  @ApiBearerAuth()
  @UseGuards(JwtRefreshAuthGuard)
  @Post('refresh')
  async refresh(@User() user: UserModel, @Res() response: Response) {
    const {
      refreshTokenCookie,
      accessToken,
    } = await this.authService.generateTokens(user);
    response.setHeader('Set-Cookie', refreshTokenCookie);
    return response.send({ accessToken });
  }
}
