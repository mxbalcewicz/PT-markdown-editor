import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from '../user/dto/auth-user.dto';
import { User } from '../user/user.schema';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './token-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async loginOrRegister(authUserDto: AuthUserDto) {
    let user = await this.usersService.findOneByFacebookId(
      authUserDto.facebookId,
    );

    if (!user) {
      user = await this.register(authUserDto);
    }

    return this.createAuthCookie(user);
  }

  async register(authUserDto: AuthUserDto) {
    return await this.usersService.create(authUserDto);
  }

  async logout() {
    return this.createNoAuthCookie();
  }

  async createAuthCookie(user: User) {
    console.log(user.id);
    const payload: TokenPayload = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
    };

    const expirationTime = this.configService.get('JWT_EXPIRATION_TIME');
    const accessToken = this.jwtService.sign(payload);

    return `Authentication=${accessToken}; HttpOnly; Path=/; Max-Age=${expirationTime}`;
  }

  async createNoAuthCookie() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
