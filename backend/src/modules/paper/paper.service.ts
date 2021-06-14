import { Injectable, NotFoundException } from '@nestjs/common';
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

  async delete(user: UserModel, hash: string) {
    const query: any = { author: user._id, hash };
    const result = await this.paperModel.deleteOne(query).exec();

    if (result.deletedCount === 0) throw new NotFoundException();

    return { hash };
  }

  async findOne(hash: string): Promise<Partial<Paper> | null> {
    const paper = await this.paperModel.findOne({ hash }).exec();

    if (!paper) throw new NotFoundException();

    const { content, title, id } = paper;
    return { hash, content, title, id };
  }

  async findOneByReadHash(readHash: string): Promise<Partial<Paper> | null> {
    const paper = await this.paperModel.findOne({ readHash }).exec();

    if (!paper) throw new NotFoundException();

    const { content, title, id } = paper;
    return { readHash, content, title, id };
  }

  async findAll(user: UserModel): Promise<Partial<Paper>[] | null> {
    const query: any = { author: user._id };
    const papers = await this.paperModel.find(query).exec();

    return papers.map(({ hash, readHash, author, title, id }) => ({
      id,
      hash,
      readHash,
      author,
      title,
    }));
  }

  async update(hash: string, content: any): Promise<Partial<Paper> | null> {
    const paper = await this.paperModel
      .findOneAndUpdate({ hash }, content)
      .exec();

    return {
      hash: paper.hash,
      content: paper.content,
      title: paper.title,
      id: paper.id,
    };
  }
}
