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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const users_service_1 = require("../users/users.service");
const userModels_1 = require("../users/userModels/userModels");
const authModels_1 = require("./authModels/authModels");
const passport_1 = require("@nestjs/passport");
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async register(res, createUserDto) {
        const result = await this.authService.register(createUserDto);
        if (!result.success) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result);
        }
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async login(res, login) {
        const user = await this.usersService.findUserByEmail(login.email);
        if (!user) {
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'User Not Found',
            });
        }
        else {
            const token = this.authService.createToken(user);
            return res.status(common_1.HttpStatus.OK).json(token);
        }
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, userModels_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard),
    common_1.Post('login'),
    __metadata("design:type", Object)
], AuthController.prototype, "", void 0);
__decorate([
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, authModels_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    swagger_1.ApiTags('auth'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map