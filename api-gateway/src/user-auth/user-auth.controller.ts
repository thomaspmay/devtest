import { Controller, OnModuleInit, Get, Put, Inject, Param, Body } from '@nestjs/common';
import { user } from 'src/protocols/userProtocols/users_pb';
import { rpcUsersAuthService  } from './user-authModels.ts/users.interface'
import { requestResponse } from 'src/protocols/userProtocols/users_pb';
import { ClientGrpc } from '@nestjs/microservices';


@Controller('users')
export class UserAuthController implements OnModuleInit {
    private userAuthService: rpcUsersAuthService;
    constructor(
        @Inject('USERS_SERVICE') private client: ClientGrpc
    ){}
    onModuleInit() {
        this.userAuthService = this.client.getService<rpcUsersAuthService>('rpcUsersService')
    }

    @Get(':id')
    async findUserByID(@Param() params): Promise<any> {
        console.log("");
        // await this.userAuthService.findUssserByID( )
    }

    @Put('register')
    async registerUser(@Body() user: user): Promise<requestResponse> {
        console.log("register called");
        console.log(JSON.stringify(user));
        return await this.userAuthService.registerUser(user).toPromise();
        
        
        // this.userAuthService.registerUser()
    }
}
