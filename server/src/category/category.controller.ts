import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindCategoryDto } from './dto/find-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('create')
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Get(':id')
  get(@Param('id') id: ObjectId) {
    return this.categoryService.findById(id);
  }

  @Get('byAlias/:alias')
  getByAlias(@Param('alias') alias: string) {
    return this.categoryService.findByAlias(alias);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.categoryService.deleteById(id);
  }

  @Patch(':id')
  patch(@Param('id') id: ObjectId, @Body() dto: CreateCategoryDto) {
    return this.categoryService.updateById(id, dto);
  }

  @Post('find')
  find(@Body() dto: FindCategoryDto) {
    return this.categoryService.findByCategory(dto.firstCategory);
  }
}
