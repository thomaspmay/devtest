import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { FoodItemsModule } from './food-items/food-items.module';

@Module({
  imports: [RecipesModule, UsersModule, FoodItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
