import { join } from 'path'
import { ClientOptions, Transport } from '@nestjs/microservices'

export const UserAuthServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `localhost:55559`,
    package: '',
    protoPath: join(__dirname, '../../protocols/userProtocols/users.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true
    }
  }
}
