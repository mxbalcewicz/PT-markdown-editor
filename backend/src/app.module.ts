import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfig } from './config/mongoose.config';
import { EditorGateway } from './modules/editor/editor.gateway';
import { PaperModule } from './modules/paper/paper.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfig,
    }),
    PaperModule,
    UserModule,
    AuthModule,
  ],
  providers: [EditorGateway],
})
export class AppModule {}
