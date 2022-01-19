import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from './comment.schema';

export type RecipeDocument = Recipe & Document;

class RecipeSetting {
  @Prop()
  name: string;

  @Prop()
  value: number;

  @Prop()
  valueName: string;
}

class RecipeStep {
  @Prop()
  name: string;

  @Prop()
  text: string;

  @Prop()
  position: number;
}

@Schema()
export class Recipe {
  @Prop()
  name: string;

  @Prop()
  picture: string;

  @Prop()
  shortText: string;

  @Prop()
  categoryAlias: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];

  @Prop({ type: () => [RecipeSetting], _id: false })
  settings: RecipeSetting[];

  @Prop({ type: () => [RecipeStep], _id: false })
  steps: RecipeStep[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
