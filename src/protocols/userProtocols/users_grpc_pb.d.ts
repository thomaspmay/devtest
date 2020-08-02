// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IrpcUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerUser: IrpcUsersServiceService_IregisterUser;
    findUserByID: IrpcUsersServiceService_IfindUserByID;
    findUserByEmail: IrpcUsersServiceService_IfindUserByEmail;
    updateUser: IrpcUsersServiceService_IupdateUser;
    deleteUser: IrpcUsersServiceService_IdeleteUser;
}

interface IrpcUsersServiceService_IregisterUser extends grpc.MethodDefinition<users_pb.userCreateRequest, users_pb.requestResponse> {
    path: string; // "/users.rpcUsersService/registerUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.userCreateRequest>;
    requestDeserialize: grpc.deserialize<users_pb.userCreateRequest>;
    responseSerialize: grpc.serialize<users_pb.requestResponse>;
    responseDeserialize: grpc.deserialize<users_pb.requestResponse>;
}
interface IrpcUsersServiceService_IfindUserByID extends grpc.MethodDefinition<users_pb.userByIDRequest, users_pb.user> {
    path: string; // "/users.rpcUsersService/findUserByID"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.userByIDRequest>;
    requestDeserialize: grpc.deserialize<users_pb.userByIDRequest>;
    responseSerialize: grpc.serialize<users_pb.user>;
    responseDeserialize: grpc.deserialize<users_pb.user>;
}
interface IrpcUsersServiceService_IfindUserByEmail extends grpc.MethodDefinition<users_pb.userByEmailRequest, users_pb.user> {
    path: string; // "/users.rpcUsersService/findUserByEmail"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.userByEmailRequest>;
    requestDeserialize: grpc.deserialize<users_pb.userByEmailRequest>;
    responseSerialize: grpc.serialize<users_pb.user>;
    responseDeserialize: grpc.deserialize<users_pb.user>;
}
interface IrpcUsersServiceService_IupdateUser extends grpc.MethodDefinition<users_pb.userCreateRequest, users_pb.requestResponse> {
    path: string; // "/users.rpcUsersService/updateUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.userCreateRequest>;
    requestDeserialize: grpc.deserialize<users_pb.userCreateRequest>;
    responseSerialize: grpc.serialize<users_pb.requestResponse>;
    responseDeserialize: grpc.deserialize<users_pb.requestResponse>;
}
interface IrpcUsersServiceService_IdeleteUser extends grpc.MethodDefinition<users_pb.userDeleteRequest, users_pb.requestResponse> {
    path: string; // "/users.rpcUsersService/deleteUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.userDeleteRequest>;
    requestDeserialize: grpc.deserialize<users_pb.userDeleteRequest>;
    responseSerialize: grpc.serialize<users_pb.requestResponse>;
    responseDeserialize: grpc.deserialize<users_pb.requestResponse>;
}

export const rpcUsersServiceService: IrpcUsersServiceService;

export interface IrpcUsersServiceServer {
    registerUser: grpc.handleUnaryCall<users_pb.userCreateRequest, users_pb.requestResponse>;
    findUserByID: grpc.handleUnaryCall<users_pb.userByIDRequest, users_pb.user>;
    findUserByEmail: grpc.handleUnaryCall<users_pb.userByEmailRequest, users_pb.user>;
    updateUser: grpc.handleUnaryCall<users_pb.userCreateRequest, users_pb.requestResponse>;
    deleteUser: grpc.handleUnaryCall<users_pb.userDeleteRequest, users_pb.requestResponse>;
}

export interface IrpcUsersServiceClient {
    registerUser(request: users_pb.userCreateRequest, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    registerUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    registerUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    findUserByID(request: users_pb.userByIDRequest, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    findUserByID(request: users_pb.userByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    findUserByID(request: users_pb.userByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    findUserByEmail(request: users_pb.userByEmailRequest, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    findUserByEmail(request: users_pb.userByEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    findUserByEmail(request: users_pb.userByEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    updateUser(request: users_pb.userCreateRequest, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.userDeleteRequest, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.userDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.userDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
}

export class rpcUsersServiceClient extends grpc.Client implements IrpcUsersServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public registerUser(request: users_pb.userCreateRequest, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public registerUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public registerUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public findUserByID(request: users_pb.userByIDRequest, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    public findUserByID(request: users_pb.userByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    public findUserByID(request: users_pb.userByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    public findUserByEmail(request: users_pb.userByEmailRequest, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    public findUserByEmail(request: users_pb.userByEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    public findUserByEmail(request: users_pb.userByEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.user) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_pb.userCreateRequest, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_pb.userCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.userDeleteRequest, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.userDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.userDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.requestResponse) => void): grpc.ClientUnaryCall;
}
