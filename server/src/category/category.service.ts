import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  Category,
  CategoryDocument,
  TopCategory,
} from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    return await this.categoryModel.create(dto);
  }

  async findById(id: ObjectId): Promise<Category> {
    return await this.categoryModel.findById(id);
  }

  async findByAlias(alias: string) {
    return await this.categoryModel.findOne({ alias });
  }

  async deleteById(id: ObjectId): Promise<string> {
    const category = await this.categoryModel.findByIdAndDelete(id);
    return category.title;
  }

  async updateById(id: ObjectId, dto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return category;
  }

  async findByCategory(firstCategory: TopCategory): Promise<Category[]> {
    return this.categoryModel
      .aggregate()
      .match({ firstCategory })
      .group({
        _id: {
          secondCategory: '$secondCategory',
        },
        pages: {
          $push: {
            alias: '$alias',
            title: '$title',
            _id: '$_id',
            category: '$category',
          },
        },
      });
  }
}
