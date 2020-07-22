import { Module } from '@nestjs/common';
import { RecipesService } from './recipes/recipes.service';
import { RecipesController } from './recipes/recipes.controller';

@Module({
  providers: [RecipesService],
  controllers: [RecipesController]
})
export class RecipesModule {}
