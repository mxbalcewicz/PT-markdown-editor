import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as Strategy from 'passport-facebook-token';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get('facebook.clientId'),
      clientSecret: configService.get('facebook.clientSecret'),
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Strategy.Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const user = {
      facebookId: profile.id,
      firstname: profile.name.givenName,
      lastname: profile.name.familyName,
      photos: profile.photos,
    };

    done(null, user);
  }
}
