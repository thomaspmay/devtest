import { Injectable } from '@nestjs/common';
import { FoodEntity } from './foodModels/food.entity';

@Injectable()
export class FoodService {
    
      // public async createFood(user: FoodEntity): Promise<FoodEntity> {
      //   return await this.usersRepository.save(user);
      // }

      // // read

      // public async getFoods(): Promise<FoodEntity[]> {
      //   return this.usersRepository.find();
      // }

      // // update
      // public async updateUser(
      //   id: number,
      //   newValue: CreateUserDto,
      // ): Promise<UserEntity | null> {
      //   const user = await this.Repository.findOneOrFail(id);
      //   if (!recipe.id) {
      //     // tslint:disable-next-line:no-console
      //     console.error("user doesn't exist");
      //   }
      //   await this.usersRepository.update(id, newValue);
      //   return await this.usersRepository.findOne(id);
      // }
      
      // // delete
      // public async deleteUser(id: string): Promise<void> {
      //   await this.usersRepository.delete(id);
      // }
}
