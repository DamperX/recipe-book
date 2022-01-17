import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

export enum TopCategory {
  Recipes,
  Features,
  Shop,
}

export class TopPageAdvantage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema()
export class Category {
  @Prop({ enum: TopCategory })
  firstCategory: TopCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  metaTitle: string;

  @Prop()
  metaDescription: string;

  @Prop()
  category: string;

  @Prop({ type: () => [TopPageAdvantage] })
  advantages?: TopPageAdvantage[];

  @Prop()
  seoText?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
