import { Controller, OnModuleInit, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { recipeGrpcService  } from './recipeModels/recipeGrpcService.interface';

@Controller('recipes')
export class RecipesController implements OnModuleInit {
    private logger = new Logger('RecipeContoller');

    @Client(grpcClientOptions)
    private client: ClientGrpc;
    private grpcService: recipeGrpcService 

    onModuleInit() {
        this.grpcService = this.client.getService<recipeGrpcService>('RecipesController');
    }

    // create
    @GrpcMethod('rpcRecipeService','createRecipes')
    createRecipes() :any {
        
    } 
    @GrpcMethod('rpcRecipeService','createUnprocessedRecipe')
    createUnprocessedRecipes() :any {
        
    } 

    // read
    @GrpcMethod('rpcRecipeService','getAllRecipes')
    getAllRecipes() :any {
        
    } 
    @GrpcMethod('rpcRecipeService','searchRecipes')
    searchRecipes() :any {
        
    } 
    @GrpcMethod('rpcRecipeService','browseRecipes')
    browseRecipes() :any {
        
    } 
    @GrpcMethod('rpcRecipeService','getMyRecipes')
    getMyRecipes() :any {
        
    } 
    // update

    @GrpcMethod('rpcRecipeService','updateRecipe')
    updateRecipe() :any {
        
    } 

    // delete
    @GrpcMethod('rpcRecipeService','deleteRecipe')
    deleteRecipe() :any {
        
    } 
}
