import { Controller, UseGuards, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/user.decorator';
import { AuthUserDto } from '../user/dto/auth-user.dto';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(FacebookAuthGuard)
  @Post('login')
  login(@User() user: AuthUserDto) {
    return this.authService.loginOrRegister(user);
  }
}
