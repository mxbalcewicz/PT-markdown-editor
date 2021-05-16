import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from '../../config/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from '../user/user.module';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useClass: JwtConfig,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, FacebookStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
