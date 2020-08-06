import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/userModels/userModels';
import { UserEntity } from './userModels/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    registerUser(userDto: CreateUserDto): Promise<UserEntity>;
    createUser(user: CreateUserDto): Promise<UserEntity>;
    findUserByID(id: number): Promise<UserEntity>;
    findUserByEmail(userEmail: string): Promise<UserEntity | null>;
    updateUser(id: number, newValue: CreateUserDto): Promise<UserEntity | null>;
    deleteUser(id: string): Promise<void>;
}
