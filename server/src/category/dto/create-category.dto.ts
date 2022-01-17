import { TopCategory } from '../schemas/category.schema';

export class TopPageAdvantageDto {
  title: string;
  description: string;
}

export class CreateCategoryDto {
  firstCategory: TopCategory;
  secondCategory: string;
  alias: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  advantages?: TopPageAdvantageDto[];
  seoText?: string;
}
