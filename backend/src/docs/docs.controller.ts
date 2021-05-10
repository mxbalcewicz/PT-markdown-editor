import { Body, Controller, Post, Get, Param, Patch } from '@nestjs/common';
import { DocsService } from './docs.service';
import { Doc } from './doc.model';
import { Response, HttpStatus } from '@nestjs/common';

@Controller('api/document')
export class DocsController {
    constructor(private docsService: DocsService) {}

    @Post()
    async createProduct(){
        const newDocument = await this.docsService.createDocument();

        return { document: newDocument, HttpStatus: HttpStatus.CREATED};
    }

    // @Get()
    // async getAllDocuments(){
    //     const allDocuments = await this.docsService.getAllDocs();
    //     return allDocuments;
    // }

    @Get(':hashcode')
    async getProduct(@Param('hashcode') hashcode: string) {
        return await this.docsService.getDoc(hashcode);
    }
}