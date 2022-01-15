import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Recipe } from 'src/recipe/schemas/recipe.schema';
import * as mongoose from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  count: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipes' }] })
  recipes: Recipe[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
