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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let UsersController = class UsersController {
    registerUser() {
    }
    getAllRecipes() {
    }
    searchRecipes() {
    }
    updateRecipe() {
    }
    deleteRecipe() {
    }
};
__decorate([
    GrpcMethod('rpcUserService', 'registerUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], UsersController.prototype, "registerUser", null);
__decorate([
    GrpcMethod('rpcUserService', 'findUserByID'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getAllRecipes", null);
__decorate([
    GrpcMethod('rpcUserService', 'findUserByEmail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UsersController.prototype, "searchRecipes", null);
__decorate([
    GrpcMethod('rpcUserService', 'updateUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UsersController.prototype, "updateRecipe", null);
__decorate([
    GrpcMethod('rpcUserService', 'deleteUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UsersController.prototype, "deleteRecipe", null);
UsersController = __decorate([
    common_1.Controller('users')
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map