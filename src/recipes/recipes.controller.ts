import { Controller, OnModuleInit, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RecipesService } from './recipes.service';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { recipeArray } from './models/recipeModels'
import { grpcClientOptions } from '../grpc-client.options';
import { recipeGrpcService  } from './models/recipeGrpcService.interface';

@Controller('recipes')
export class RecipesController implements OnModuleInit {
    private logger = new Logger('RecipeContoller');

    @Client(grpcClientOptions)
    private client: ClientGrpc;
    private grpcService: recipeGrpcService 

    onModuleInit() {
        this.grpcService = this.client.getService<recipeGrpcService>('RecipesController');
    }

    @GrpcMethod('RecipeService','getAllRecipes')
    getAllRecipes() :any {
        
    } 
}
