import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'recipes', // recipes
    protoPath: join(__dirname, './recipes/recipe.proto'), // ['recipes']
  },
};
