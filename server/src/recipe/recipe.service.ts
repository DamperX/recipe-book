import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { FindRecipeDto } from './dto/find-recipe.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateRecipeDto): Promise<Recipe> {
    const recipe = await this.recipeModel.create({ ...dto });
    return recipe;
  }

  async getAll(): Promise<Recipe[]> {
    const recipes = await this.recipeModel.find();
    return recipes;
  }

  async getOne(id: ObjectId): Promise<Recipe> {
    const recipe = await this.recipeModel.findById(id).populate('comments');
    return recipe;
  }

  async delete(id: ObjectId): Promise<string> {
    const recipe = await this.recipeModel.findByIdAndDelete(id).exec();
    return recipe.name;
  }

  async updateById(id: ObjectId, dto: Recipe): Promise<Recipe> {
    const recipe = await this.recipeModel
      .findByIdAndUpdate(id, dto, {
        new: true,
      })
      .exec();

    return recipe;
  }

  async findByCategory(dto: FindRecipeDto): Promise<Recipe[]> {
    const recipes = await this.recipeModel.aggregate([
      {
        $match: {
          category: dto.category,
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
      {
        $limit: dto.limit,
      },
    ]);

    return recipes;
  }

  // Comments
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const recipe = await this.recipeModel.findById(dto.recipeId);
    const comment = await this.commentModel.create({ ...dto });
    recipe.comments.push(comment._id);
    await recipe.save();
    return comment;
  }

  async deleteComment(id: ObjectId): Promise<ObjectId> {
    const comment = await this.commentModel.findByIdAndDelete(id);
    return comment._id;
  }

  async updateCommentById(
    id: ObjectId,
    dto: CreateCommentDto,
  ): Promise<Comment> {
    const comment = await this.commentModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return comment;
  }
}
