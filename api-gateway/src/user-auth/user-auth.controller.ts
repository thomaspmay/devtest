import { Controller, OnModuleInit, Get, Put, Inject, Param, Body } from '@nestjs/common';
import { userCreateRequest, requestResponse } from '../../../protocols/userProtocols/users_pb';
import { rpcUsersAuthService  } from './user-authModels/users.interface'
import { ClientGrpc } from '@nestjs/microservices';
import { User } from './user-authModels/userModels';


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
    async registerUser(@Body() user: User): requestResponse {
        console.log("register called");
        console.log(JSON.stringify(user));
        // let newUser = new userCreateRequest();
        // newUser.setFirstname(user.firstName);
        // newUser.setLastname(user.lastName);
        // newUser.setEmail(user.email);
        // newUser.setPassword(user.password);
        return this.userAuthService.registerUser({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });
        
        
        // this.userAuthService.registerUser()
    }
}
