import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User as UserModel } from '../user/user.schema';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PaperDocument = Paper & Document;

@Schema()
export class Paper {
  @Prop({ default: uuidv4 })
  id: string;

  @Prop({ default: 'Untitled document' })
  title: string;

  @Prop()
  hash: string;

  @Prop()
  readHash: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  author: UserModel;

  @Prop()
  content: [];
}

export const PaperSchema = SchemaFactory.createForClass(Paper);
