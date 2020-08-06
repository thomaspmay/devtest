// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_users_requestResponse(arg) {
  if (!(arg instanceof users_pb.requestResponse)) {
    throw new Error('Expected argument of type users.requestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_requestResponse(buffer_arg) {
  return users_pb.requestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_user(arg) {
  if (!(arg instanceof users_pb.user)) {
    throw new Error('Expected argument of type users.user');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_user(buffer_arg) {
  return users_pb.user.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_userByEmailRequest(arg) {
  if (!(arg instanceof users_pb.userByEmailRequest)) {
    throw new Error('Expected argument of type users.userByEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_userByEmailRequest(buffer_arg) {
  return users_pb.userByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_userByIDRequest(arg) {
  if (!(arg instanceof users_pb.userByIDRequest)) {
    throw new Error('Expected argument of type users.userByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_userByIDRequest(buffer_arg) {
  return users_pb.userByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_userCreateRequest(arg) {
  if (!(arg instanceof users_pb.userCreateRequest)) {
    throw new Error('Expected argument of type users.userCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_userCreateRequest(buffer_arg) {
  return users_pb.userCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_userDeleteRequest(arg) {
  if (!(arg instanceof users_pb.userDeleteRequest)) {
    throw new Error('Expected argument of type users.userDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_userDeleteRequest(buffer_arg) {
  return users_pb.userDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var rpcUsersServiceService = exports.rpcUsersServiceService = {
  // create
registerUser: {
    path: '/users.rpcUsersService/registerUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.userCreateRequest,
    responseType: users_pb.requestResponse,
    requestSerialize: serialize_users_userCreateRequest,
    requestDeserialize: deserialize_users_userCreateRequest,
    responseSerialize: serialize_users_requestResponse,
    responseDeserialize: deserialize_users_requestResponse,
  },
  // read
findUserByID: {
    path: '/users.rpcUsersService/findUserByID',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.userByIDRequest,
    responseType: users_pb.user,
    requestSerialize: serialize_users_userByIDRequest,
    requestDeserialize: deserialize_users_userByIDRequest,
    responseSerialize: serialize_users_user,
    responseDeserialize: deserialize_users_user,
  },
  findUserByEmail: {
    path: '/users.rpcUsersService/findUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.userByEmailRequest,
    responseType: users_pb.user,
    requestSerialize: serialize_users_userByEmailRequest,
    requestDeserialize: deserialize_users_userByEmailRequest,
    responseSerialize: serialize_users_user,
    responseDeserialize: deserialize_users_user,
  },
  // update
updateUser: {
    path: '/users.rpcUsersService/updateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.userCreateRequest,
    responseType: users_pb.requestResponse,
    requestSerialize: serialize_users_userCreateRequest,
    requestDeserialize: deserialize_users_userCreateRequest,
    responseSerialize: serialize_users_requestResponse,
    responseDeserialize: deserialize_users_requestResponse,
  },
  // delete
deleteUser: {
    path: '/users.rpcUsersService/deleteUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.userDeleteRequest,
    responseType: users_pb.requestResponse,
    requestSerialize: serialize_users_userDeleteRequest,
    requestDeserialize: deserialize_users_userDeleteRequest,
    responseSerialize: serialize_users_requestResponse,
    responseDeserialize: deserialize_users_requestResponse,
  },
};

exports.rpcUsersServiceClient = grpc.makeGenericClientConstructor(rpcUsersServiceService);
