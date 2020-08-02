import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // create
    @GrpcMethod('rpcUserService','registerUser')
    registerUser() :any {
        
    } 

    // read
    @GrpcMethod('rpcUserService','getAllRecipes')
    getAllRecipes() :any {
        
    } 
    @GrpcMethod('rpcUserService','searchRecipes')
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
