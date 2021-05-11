import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaperDocument = Paper & Document;

@Schema()
export class Paper {
  @Prop()
  hash: string;

  @Prop()
  content: [];
}

export const PaperSchema = SchemaFactory.createForClass(Paper);
