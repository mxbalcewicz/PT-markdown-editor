import { Get, Injectable, NotFoundException } from "@nestjs/common";
import { Doc } from './doc.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { generateHash } from 'random-hash';
import { doc } from "prettier";

@Injectable()
export class DocsService {
    constructor(@InjectModel('Document') private docModel: Model<Doc>) {
    }

    generateHashcode(){
        var stringHash = generateHash({length: 25});
        while(true){
            return '';
        }
        return stringHash;
    }

    async createDocument() {
        const hash = this.generateHashcode();
        const newDoc = new this.docModel();
        const res = await newDoc.save();
        // console.log(res);
        return res;
    };

    async getAllDocs(){
        const documents = await this.docModel.find().exec();
        // console.log(documents);
        return documents as Doc[];
    }

    async getDoc(hashcode: string) {
        const document = await this.findDocument(hashcode);
        return document;
    }

    private async findDocument(hashcode: string): Promise<Doc>{
        let document;
        try {
            document = await this.docModel.findOne({'hashcode': hashcode});
        } catch(error) {
            throw new NotFoundException('Document not found');
        }
        
        if (!document) {
            throw new NotFoundException('Document not found');
        }
        return document;
    }
}