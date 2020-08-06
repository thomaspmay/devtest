import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
    @ApiProperty()
    readonly email: string;

    @ApiProperty()
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