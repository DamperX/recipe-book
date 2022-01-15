import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { createCategoryDto } from './dto/create-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(dto: createCategoryDto): Promise<Category> {
    const category = await this.categoryModel.create({ ...dto, count: 0 });
    return category;
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async delete(id: ObjectId): Promise<string> {
    const category = await this.categoryModel.findByIdAndDelete(id);
    return category.name;
  }
}
