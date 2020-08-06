import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [FoodModule, RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
