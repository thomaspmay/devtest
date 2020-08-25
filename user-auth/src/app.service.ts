import { Injectable } from '@nestjs/common';
import { connectionService } from './connection/connection.service';

@Injectable()
export class AppService {
  createUserRecipeStore(){
    // get user id
    // create new table using connectionservice using id
    // insert all recipes from default repo store
  }
  
  getUserRecipeRepo(){
    //
  }

  getUserFoodRepo(userID: string){
    let repoName: string = "food" + userID; 
    const userFoodRepo = createFoodEntity(repoName);
    const connection = connectionService.getConnection(userFoodRepo);
    connection.getRepository(userFoodRepo);
  }

}
