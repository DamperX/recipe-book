import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CategoryService } from './category.service';
import { createCategoryDto } from './dto/create-category.dto';

@Controller('/categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post()
  create(@Body() dto: createCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.categoryService.delete(id);
  }
}
