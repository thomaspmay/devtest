import {
    Controller, UseGuards, HttpStatus, Response, Request,
    Get, Post, Body, Put, Param, Delete,
  } from '@nestjs/common';
  import { ApiTags, ApiResponse } from '@nestjs/swagger';
  import { AuthService } from './auth.service';
  import { UsersService } from '../users/users.service'
  import { CreateUserDto } from '../users/userModels/userModels';
//   import { debug } from 'util';
  import { LoginUserDto } from './authModels/authModels';
  import { AuthGuard } from '@nestjs/passport';
  
  @ApiTags('auth')
  @Controller('auth')
  export class AuthController {
    constructor(
      private readonly authService: AuthService,
      private readonly usersService: UsersService,
    ) {}
  
    @Post('register')
    public async register(@Response() res, @Body() createUserDto: CreateUserDto) {
      const result = await this.authService.register(createUserDto);
      if (!result.success) {
        return res.status(HttpStatus.BAD_REQUEST).json(result);
      }
      return res.status(HttpStatus.OK).json(result);
    }
  
    @UseGuards(AuthGuard)
    @Post('login'), User
    public async login(@Response() res, @Body() login: LoginUserDto) {
      const user = await this.usersService.findUserByEmail(login.email);
      if (!user) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'User Not Found',
        });
      } else {
        //debug('start getting the token');
        const token = this.authService.createToken(user);
        //debug(token.accessToken);
        return res.status(HttpStatus.OK).json(token);
      }
    }
  }