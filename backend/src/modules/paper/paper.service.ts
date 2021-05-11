import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paper, PaperDocument } from './paper.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaperService {
  constructor(
    @InjectModel(Paper.name) private paperModel: Model<PaperDocument>,
  ) {}

  create(): Promise<Paper> {
    const hash = uuidv4();
    return this.paperModel.create({ hash });
  }

  findOne(hash: string): Promise<Paper | null> {
    return this.paperModel.findOne({ hash }).exec();
  }

  findAll(): Promise<Paper[] | null> {
    return this.paperModel.find().exec();
  }

  update(hash: string, content: any) {
    return this.paperModel.findOneAndUpdate({ hash }, content).exec();
  }
}
