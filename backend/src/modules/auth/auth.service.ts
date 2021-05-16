import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from '../user/dto/auth-user.dto';
import { User } from '../user/user.schema';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async loginOrRegister(authUserDto: AuthUserDto) {
    let user = await this.usersService.findOneByFacebookId(authUserDto.facebookId);

    if (!user) {
      user = await this.register(authUserDto);
    }

    return this.login(user);
  }

  async register(authUserDto: AuthUserDto) {
    return await this.usersService.create(authUserDto);
  }

  async login(user: User) {
    const payload = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
