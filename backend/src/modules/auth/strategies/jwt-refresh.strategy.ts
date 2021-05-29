import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { RefreshTokenPayload } from '../types/token-payload.interface';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import { User } from '../../user/user.schema';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private configService: ConfigService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request?.cookies?.Authentication,
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.refreshSecret'),
      passReqToCallback: true,
    });
  }

  async validate(
    request: Request,
    payload: RefreshTokenPayload,
  ): Promise<User> {
    const refreshToken = request.cookies?.Authentication;
    const user = await this.userService.findOne(payload.id);
    const isRefreshTokenValid = await this.authService.isRefreshTokenValid(
      refreshToken,
      user,
    );

    if (!isRefreshTokenValid) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
