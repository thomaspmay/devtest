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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/userModels/user.entity");
let AuthService = AuthService_1 = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async register(user) {
        let status = {
            success: true,
            message: 'user register',
        };
        try {
            await this.usersService.registerUser(user);
        }
        catch (err) {
            status = { success: false, message: err };
        }
        return status;
    }
    createToken(user) {
        const expiresIn = 3600;
        const accessToken = jwt.sign({
            id: user.id,
            email: user.email,
            firstname: user.firstName,
            lastname: user.lastName,
        }, 'Codebrains', { expiresIn });
        console.log('return the token');
        console.log(accessToken);
        return {
            expiresIn,
            accessToken,
        };
    }
    async validateUserToken(payload) {
        return await this.usersService.findUserByID(payload.id);
    }
    async validateUser(email, password) {
        const user = await this.usersService.findUserByEmail(email);
        if (user && user.comparePassword(password)) {
            this.logger.log('password check success');
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
};
AuthService = AuthService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map