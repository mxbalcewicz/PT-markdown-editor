import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { Doc, DocSchema } from './doc.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Document', schema: DocSchema}])
    ],
    controllers: [DocsController],
    providers: [DocsService]
})
export class DocsModule {}