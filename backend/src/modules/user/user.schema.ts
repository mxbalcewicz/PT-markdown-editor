import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ default: uuidv4 })
  id: string;

  @Prop()
  facebookId: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  photos: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
