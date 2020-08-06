"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const microservices_2 = require("@nestjs/microservices");
const grpc_client_options_1 = require("../grpc-client.options");
let RecipesController = class RecipesController {
    constructor() {
        this.logger = new common_1.Logger('RecipeContoller');
    }
    onModuleInit() {
        this.grpcService = this.client.getService('RecipesController');
    }
    createRecipes() {
    }
    createUnprocessedRecipes() {
    }
    getAllRecipes() {
    }
    searchRecipes() {
    }
    browseRecipes() {
    }
    getMyRecipes() {
    }
    updateRecipe() {
    }
    deleteRecipe() {
    }
};
__decorate([
    microservices_2.Client(grpc_client_options_1.grpcClientOptions),
    __metadata("design:type", Object)
], RecipesController.prototype, "client", void 0);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'createRecipes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "createRecipes", null);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'createUnprocessedRecipe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "createUnprocessedRecipes", null);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'getAllRecipes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "getAllRecipes", null);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'searchRecipes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "searchRecipes", null);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'browseRecipes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "browseRecipes", null);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'getMyRecipes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "getMyRecipes", null);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'updateRecipe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "updateRecipe", null);
__decorate([
    microservices_1.GrpcMethod('rpcRecipeService', 'deleteRecipe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RecipesController.prototype, "deleteRecipe", null);
RecipesController = __decorate([
    common_1.Controller('recipes')
], RecipesController);
exports.RecipesController = RecipesController;
//# sourceMappingURL=recipes.controller.js.map