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
exports.GrpcJwtService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const config_1 = require("@nestjs/config");
const jwksClient = require('jwks-rsa');
let GrpcJwtService = class GrpcJwtService {
    constructor(configService) {
        this.configService = configService;
        this.client = jwksClient({
            jwksUri: configService.get('auth.jwks_uri'),
            issuer: configService.get('auth.iss'),
            audience: configService.get('auth.aud'),
        });
    }
    async verify(params) {
        let token = params;
        let self = this;
        return new Promise(function (resolve, reject) {
            jwt.verify(token, getKey, {}, (err, decoded) => {
                if (err)
                    reject(err);
                resolve(decoded);
            });
        }).then((user) => user);
        function getKey(header, callback) {
            self.client.getSigningKey(header.kid, function (err, key) {
                var signingKey = key.publicKey || key.rsaPublicKey;
                callback(null, signingKey);
            });
        }
    }
};
GrpcJwtService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GrpcJwtService);
exports.GrpcJwtService = GrpcJwtService;
//# sourceMappingURL=grpc-jwt.service.js.map