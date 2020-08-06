import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FoodController } from './food/food.controller';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesModule } from './recipes/recipes.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [UserAuthModule, RecipesModule, FoodModule],
  controllers: [FoodController, RecipesController],
  providers: [],
})
export class AppModule {}
