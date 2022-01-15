import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { FindRecipeDto } from './dto/find-recipe.dto';
import { RecipeService } from './recipe.service';
import { Recipe } from './schemas/recipe.schema';

@Controller('/recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateRecipeDto,
  ) {
    console.log(file);
    return this.recipeService.create(dto, '');
  }

  @Get()
  getAll() {
    return this.recipeService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.recipeService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.recipeService.delete(id);
  }

  @Patch(':id')
  patch(@Param('id') id: ObjectId, @Body() dto: Recipe) {
    return this.recipeService.updateById(id, dto);
  }

  @Post('find')
  async find(@Body() dto: FindRecipeDto) {
    return this.recipeService.findByCategory(dto);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.recipeService.addComment(dto);
  }

  @Delete('/comment/:id')
  deleteComment(@Param('id') id: ObjectId) {
    return this.recipeService.deleteComment(id);
  }

  @Patch('/comment/:id')
  patchComment(@Param('id') id: ObjectId, dto: CreateCommentDto) {
    return this.recipeService.updateCommentById(id, dto);
  }
}
