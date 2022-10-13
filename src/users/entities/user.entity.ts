import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  name: string;

  required: true;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
