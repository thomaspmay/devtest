import { Module } from '@nestjs/common';
import { UserAuthController } from './user-auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'USERS_SERVICE', 
        transport: Transport.GRPC,
        options: {
          package: 'users',
          protoPath: join(__dirname, '../protocols/userProtocols/users.proto'),
          url: 'localhost:55559'
        },
      },
    ]),
  ],
  controllers: [UserAuthController]
})
export class UserAuthModule {}
