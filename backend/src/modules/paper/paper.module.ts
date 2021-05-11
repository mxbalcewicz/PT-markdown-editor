import { Module } from '@nestjs/common';
import { PaperService } from './paper.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Paper, PaperSchema } from './paper.schema';
import { PaperController } from './paper.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Paper.name, schema: PaperSchema }]),
  ],
  providers: [PaperService],
  controllers: [PaperController],
  exports: [PaperService],
})
export class PaperModule {}
