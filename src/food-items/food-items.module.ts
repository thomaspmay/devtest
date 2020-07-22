import { Module } from '@nestjs/common';
import { FoodItemsController } from './food-items.controller';
import { FoodItemsService } from './food-items.service';

@Module({
  controllers: [FoodItemsController],
  providers: [FoodItemsService]
})
export class FoodItemsModule {}
