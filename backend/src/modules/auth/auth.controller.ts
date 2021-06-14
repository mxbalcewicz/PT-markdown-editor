import { Controller, UseGuards, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '../user/user.decorator';
import { User as UserModel } from '../user/user.schema';
import { AuthUserDto } from '../user/dto/auth-user.dto';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Body } from '@nestjs/common';
import { RegisterUserDto } from '../user/dto/register-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBearerAuth()
  @UseGuards(FacebookAuthGuard)
  @Post('login/facebook')
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

  @UseGuards(LocalAuthGuard)
  @Post('login/local')
  async loginLocal(@User() user: UserModel, @Res() response: Response) {
    const {
      refreshTokenCookie,
      accessToken,
    } = await this.authService.loginLocal(user);
    response.setHeader('Set-Cookie', refreshTokenCookie);
    return response.send({ accessToken });
  }

  @Post('register')
  async registerLocal(
    @Body() registerUserDto: RegisterUserDto,
    @Res() response: Response,
  ) {
    await this.authService.registerLocal(registerUserDto);
    return response.sendStatus(200);
  }
}
