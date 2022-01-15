import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { RecipeModule } from './recipe/recipe.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:admin@localhost:27017/food?authSource=admin',
    ),
    RecipeModule,
    CategoryModule,
    FilesModule,
  ],
})
export class AppModule {}
