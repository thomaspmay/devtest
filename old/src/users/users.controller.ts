import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    // create
    @GrpcMethod('rpcUserService','registerUser')
    registerUser() :any {
        
    } 

    // read
    @GrpcMethod('rpcUserService','findUserByID')
    getAllRecipes() :any {
        
    } 
    @GrpcMethod('rpcUserService','findUserByEmail')
    searchRecipes() :any {
        
    }
    // update

    @GrpcMethod('rpcUserService','updateUser')
    updateRecipe() :any {
        
    } 

    // delete
    @GrpcMethod('rpcUserService','deleteUser')
    deleteRecipe() :any {
        
    } 
}
