import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { FoodItemsModule } from './food-items/food-items.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config.service';
import { FoodModule } from './food/food.module';

@Module({
  imports: [RecipesModule, UsersModule, AuthModule, FoodItemsModule,
  TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  AuthModule,
  FoodModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
