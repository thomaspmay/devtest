// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class requestResponse extends jspb.Message { 
    getStatuscode(): number;
    setStatuscode(value: number): requestResponse;

    getDescription(): string;
    setDescription(value: string): requestResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): requestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: requestResponse): requestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: requestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): requestResponse;
    static deserializeBinaryFromReader(message: requestResponse, reader: jspb.BinaryReader): requestResponse;
}

export namespace requestResponse {
    export type AsObject = {
        statuscode: number,
        description: string,
    }
}

export class userLoginRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): userLoginRequest;

    getPassword(): string;
    setPassword(value: string): userLoginRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userLoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: userLoginRequest): userLoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userLoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userLoginRequest;
    static deserializeBinaryFromReader(message: userLoginRequest, reader: jspb.BinaryReader): userLoginRequest;
}

export namespace userLoginRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class userCreateRequest extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): userCreateRequest;

    getLastname(): string;
    setLastname(value: string): userCreateRequest;

    getEmail(): string;
    setEmail(value: string): userCreateRequest;

    getPassword(): string;
    setPassword(value: string): userCreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: userCreateRequest): userCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userCreateRequest;
    static deserializeBinaryFromReader(message: userCreateRequest, reader: jspb.BinaryReader): userCreateRequest;
}

export namespace userCreateRequest {
    export type AsObject = {
        firstname: string,
        lastname: string,
        email: string,
        password: string,
    }
}

export class user extends jspb.Message { 
    getId(): number;
    setId(value: number): user;

    getFirstname(): string;
    setFirstname(value: string): user;

    getLastname(): string;
    setLastname(value: string): user;

    getEmail(): string;
    setEmail(value: string): user;

    getPassword(): string;
    setPassword(value: string): user;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): user.AsObject;
    static toObject(includeInstance: boolean, msg: user): user.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: user, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): user;
    static deserializeBinaryFromReader(message: user, reader: jspb.BinaryReader): user;
}

export namespace user {
    export type AsObject = {
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
    }
}

export class userByIDRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): userByIDRequest;

    getAuthenticationtoken(): string;
    setAuthenticationtoken(value: string): userByIDRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: userByIDRequest): userByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userByIDRequest;
    static deserializeBinaryFromReader(message: userByIDRequest, reader: jspb.BinaryReader): userByIDRequest;
}

export namespace userByIDRequest {
    export type AsObject = {
        id: number,
        authenticationtoken: string,
    }
}

export class userByEmailRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): userByEmailRequest;

    getAuthenticationtoken(): string;
    setAuthenticationtoken(value: string): userByEmailRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userByEmailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: userByEmailRequest): userByEmailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userByEmailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userByEmailRequest;
    static deserializeBinaryFromReader(message: userByEmailRequest, reader: jspb.BinaryReader): userByEmailRequest;
}

export namespace userByEmailRequest {
    export type AsObject = {
        email: string,
        authenticationtoken: string,
    }
}

export class userDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): userDeleteRequest;

    getPassword(): string;
    setPassword(value: string): userDeleteRequest;

    getAuthenticationtoken(): string;
    setAuthenticationtoken(value: string): userDeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: userDeleteRequest): userDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userDeleteRequest;
    static deserializeBinaryFromReader(message: userDeleteRequest, reader: jspb.BinaryReader): userDeleteRequest;
}

export namespace userDeleteRequest {
    export type AsObject = {
        id: number,
        password: string,
        authenticationtoken: string,
    }
}
