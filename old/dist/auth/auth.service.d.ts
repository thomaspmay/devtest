import { UsersService } from 'src/users/users.service';
import { RegistrationStatus, JwtPayload } from '../auth/authModels/authModels';
import { CreateUserDto, User } from '../users/userModels/userModels';
import { UserEntity } from 'src/users/userModels/user.entity';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    private readonly logger;
    register(user: CreateUserDto): Promise<RegistrationStatus>;
    createToken(user: UserEntity): {
        expiresIn: number;
        accessToken: string;
    };
    validateUserToken(payload: JwtPayload): Promise<UserEntity>;
    validateUser(email: string, password: string): Promise<User>;
}
