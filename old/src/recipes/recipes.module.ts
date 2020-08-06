import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientParserService } from './ingredient-parser.service';

@Module({
  providers: [RecipesService, IngredientParserService],
  controllers: [RecipesController]
})
export class RecipesModule {}
