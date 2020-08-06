"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcClientOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.grpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: 'recipes',
        protoPath: path_1.join(__dirname, 'protocols/recipeProtocols/recipes.proto'),
        url: 'localhost:55555'
    },
};
//# sourceMappingURL=grpc-client.options.js.map