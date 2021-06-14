import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paper, PaperDocument } from './paper.schema';
import { v4 as uuidv4 } from 'uuid';
import { User as UserModel } from '../user/user.schema';

@Injectable()
export class PaperService {
  constructor(
    @InjectModel(Paper.name) private paperModel: Model<PaperDocument>,
  ) {}

  create(user: UserModel): Promise<Paper> {
    const hash = uuidv4();
    const readHash = uuidv4();
    const author = user;
    return this.paperModel.create({ hash, readHash, author });
  }

  findOne(hash: string): Promise<Paper | null> {
    return this.paperModel.findOne({ hash }).exec();
  }

  findOneByReadHash(readHash: string): Promise<Paper | null> {
    return this.paperModel.findOne({ readHash }).exec();
  }

  async findAll(user: UserModel): Promise<Partial<Paper>[] | null> {
    const query: any = { author: user._id };
    const papers = await this.paperModel.find(query).exec();

    return papers.map((paper) => ({
      hash: paper.hash,
      readHash: paper.readHash,
      author: paper.author,
      title: paper.title,
    }));
  }

  update(hash: string, content: any) {
    return this.paperModel.findOneAndUpdate({ hash }, content).exec();
  }
}
