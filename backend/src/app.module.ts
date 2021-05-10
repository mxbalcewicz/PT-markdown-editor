import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
