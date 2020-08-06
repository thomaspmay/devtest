import { User } from './userModels';
export declare class UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    comparePassword(attempt: string): Promise<boolean>;
    toObject(showToken?: boolean): User;
}
