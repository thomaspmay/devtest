import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/userModels/userModels';
import { LoginUserDto } from './authModels/authModels';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(res: any, createUserDto: CreateUserDto): Promise<any>;
    : any;
    User: any;
    login(res: any, login: LoginUserDto): Promise<any>;
}
