import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import {user, requestResponse, userCreateRequest, userByEmailRequest,
  userByIDRequest,userDeleteRequest,userLoginRequest} from '../../protocols/userProtocols/users_pb'
import { rejects } from 'assert';
import { UserEntity } from './userModels/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  userDB: UserEntity[] = [];
  // create
  @GrpcMethod('rpcUsersService','registerUser')
  registerUser(newUserRequest: userCreateRequest): Promise<requestResponse> {
    console.log("grpc recieved")
    let dbsize = this.userDB.length;
    console.log(newUserRequest);
    console.log(JSON.stringify(newUserRequest));
    console.log(newUserRequest.getEmail())
    const user = new UserEntity(
      dbsize+1,
      newUserRequest.getFirstname(),
      newUserRequest.getLastname(),
      newUserRequest.getEmail(),
      newUserRequest.getPassword()
    );
    this.userDB.push(user)
    let res: requestResponse;
    res.setStatuscode(200);
    res.setDescription("user added");
    return new Promise<requestResponse>((resolve,reject) => {})
  }

  // read
  @GrpcMethod('rpcUsersService','findUserByID')
  findUserByID(userByIDRequest): user {
    let user: user;
    return user;
  }

  @GrpcMethod('rpcUsersService','findUserByEmail')
  findUserByEmail(userByIDRequest): user {
    let user: user;
    return user;
  }

  // update
  @GrpcMethod('rpcUsersService','updateUser')
  updateUser(userCreateRequest): requestResponse {
    let res: requestResponse;
    return res;
  }
  // delete
  @GrpcMethod('rpcUsersService','deleteUser')
  deleteUser(userDeleteRequest): requestResponse {
    let res: requestResponse;
    return res;
  }
}
