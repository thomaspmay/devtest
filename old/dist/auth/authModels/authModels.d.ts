export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
export interface JwtPayload {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}
export interface RegistrationStatus {
    success: boolean;
    message: string;
}
export interface IToken {
    readonly token: string;
}
