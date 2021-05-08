import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DocSchema } from './doc.model';
import { DocController } from './docs.controller';

@Module({
  imports: [DatabaseModule, MongooseModule.forFeature([{name: 'Doc', schema: DocSchema}])
  ],
  controllers: [DocController],
  providers: [
  ],
})
export class DocsModule {}