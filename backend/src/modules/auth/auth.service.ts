import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from '../user/dto/auth-user.dto';
import { User } from '../user/user.schema';
import { ConfigService } from '@nestjs/config';
import {
  RefreshTokenPayload,
  TokenPayload,
} from './types/token-payload.interface';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from '../user/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne(username);

    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }

    return null;
  }

  async loginLocal(user: User) {
    return this.generateTokens(user);
  }

  async registerLocal(registerUserDto: RegisterUserDto) {
    let user = await this.usersService.findOneByEmail(registerUserDto.email);

    if (user) {
      throw new ConflictException();
    }

    await this.usersService.createLocal(registerUserDto);
  }

  async loginOrRegister(authUserDto: AuthUserDto) {
    let user = await this.usersService.findOneByEmail(authUserDto.email);

    if (!user) {
      user = await this.register(authUserDto);
    }

    return this.generateTokens(user);
  }

  async generateTokens(user: User) {
    const {
      refreshToken,
      expiresIn: refreshTokenExpiresIn,
    } = await this.generateRefreshToken(user);
    const { accessToken, expiresIn } = this.generateAccessToken(user);

    const refreshTokenCookie = this.createAuthCookie(
      refreshToken,
      refreshTokenExpiresIn,
    );

    return {
      refreshTokenCookie: refreshTokenCookie,
      accessToken: {
        token: accessToken,
        expiresIn: expiresIn,
      },
    };
  }

  async register(authUserDto: AuthUserDto) {
    return await this.usersService.create(authUserDto);
  }

  createAuthCookie(accessToken: string, expirationTime: number) {
    return `Authentication=${accessToken}; HttpOnly; Path=/; Max-Age=${expirationTime}; SameSite=None; Secure;`;
  }

  createNoAuthCookie() {
    return this.createAuthCookie('', 0);
  }

  async isRefreshTokenValid(
    refreshToken: string,
    user: User,
  ): Promise<boolean> {
    return await bcrypt.compare(refreshToken, user.refreshToken);
  }

  async generateRefreshToken(user: User) {
    const payload: RefreshTokenPayload = {
      id: user._id,
    };

    const secret = this.configService.get('jwt.refreshSecret');
    const expiresIn = +this.configService.get(
      'jwt.refreshSignOptions.expiresIn',
    );

    const refreshToken = this.jwtService.sign(payload, { secret, expiresIn });
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    await this.usersService.update(user._id, {
      refreshToken: hashedRefreshToken,
    });

    return { refreshToken, expiresIn };
  }

  generateAccessToken(user: User) {
    const payload: TokenPayload = {
      id: user._id,
      username: user.username,
    };

    const secret = this.configService.get('jwt.secret');
    const expiresIn = +this.configService.get('jwt.signOptions.expiresIn');

    const accessToken = this.jwtService.sign(payload, { secret, expiresIn });

    return { accessToken, expiresIn };
  }
}
