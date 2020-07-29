import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { FoodItemsModule } from './food-items/food-items.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/userModels/userModels';
import { RecipeEntity, IngredientEntity, MetaDataEntity } from './recipes/recipeModels/recipeModels';


@Module({
  imports: [RecipesModule, UsersModule, FoodItemsModule,
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [UserEntity, RecipeEntity, IngredientEntity, MetaDataEntity],
      synchronize: true,
    }),
  AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
