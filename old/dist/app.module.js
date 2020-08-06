"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const recipes_module_1 = require("./recipes/recipes.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_service_1 = require("./config.service");
const food_module_1 = require("./food/food.module");
const rank_module_1 = require("./rank/rank.module");
const grpc_jwt_service_service_1 = require("./grpc-jwt-service/grpc-jwt-service.service");
const grpc_jwt_service_1 = require("./grpc-jwt/grpc-jwt.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [recipes_module_1.RecipesModule,
            typeorm_1.TypeOrmModule.forRoot(config_service_1.configService.getTypeOrmConfig()),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            food_module_1.FoodModule,
            rank_module_1.RankModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, grpc_jwt_service_service_1.GrpcJwtServiceService, grpc_jwt_service_1.GrpcJwtService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map