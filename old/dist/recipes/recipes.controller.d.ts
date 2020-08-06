import { OnModuleInit } from '@nestjs/common';
export declare class RecipesController implements OnModuleInit {
    private logger;
    private client;
    private grpcService;
    onModuleInit(): void;
    createRecipes(): any;
    createUnprocessedRecipes(): any;
    getAllRecipes(): any;
    searchRecipes(): any;
    browseRecipes(): any;
    getMyRecipes(): any;
    updateRecipe(): any;
    deleteRecipe(): any;
}
