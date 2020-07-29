// package: recipes
// file: recipes.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as recipes_pb from "./recipes_pb";

interface IrpcRecipeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createRecipes: IrpcRecipeServiceService_IcreateRecipes;
    createUnprocessedRecipe: IrpcRecipeServiceService_IcreateUnprocessedRecipe;
    getAllRecipes: IrpcRecipeServiceService_IgetAllRecipes;
    searchRecipes: IrpcRecipeServiceService_IsearchRecipes;
    browseRecipes: IrpcRecipeServiceService_IbrowseRecipes;
    getMyRecipes: IrpcRecipeServiceService_IgetMyRecipes;
    updateRecipe: IrpcRecipeServiceService_IupdateRecipe;
    deleteRecipe: IrpcRecipeServiceService_IdeleteRecipe;
}

interface IrpcRecipeServiceService_IcreateRecipes extends grpc.MethodDefinition<recipes_pb.Recipe, recipes_pb.requestResponse> {
    path: string; // "/recipes.rpcRecipeService/createRecipes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.Recipe>;
    requestDeserialize: grpc.deserialize<recipes_pb.Recipe>;
    responseSerialize: grpc.serialize<recipes_pb.requestResponse>;
    responseDeserialize: grpc.deserialize<recipes_pb.requestResponse>;
}
interface IrpcRecipeServiceService_IcreateUnprocessedRecipe extends grpc.MethodDefinition<recipes_pb.UnprocessedRecipe, recipes_pb.requestResponse> {
    path: string; // "/recipes.rpcRecipeService/createUnprocessedRecipe"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.UnprocessedRecipe>;
    requestDeserialize: grpc.deserialize<recipes_pb.UnprocessedRecipe>;
    responseSerialize: grpc.serialize<recipes_pb.requestResponse>;
    responseDeserialize: grpc.deserialize<recipes_pb.requestResponse>;
}
interface IrpcRecipeServiceService_IgetAllRecipes extends grpc.MethodDefinition<recipes_pb.RecipeAllRequest, recipes_pb.RecipeArray> {
    path: string; // "/recipes.rpcRecipeService/getAllRecipes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.RecipeAllRequest>;
    requestDeserialize: grpc.deserialize<recipes_pb.RecipeAllRequest>;
    responseSerialize: grpc.serialize<recipes_pb.RecipeArray>;
    responseDeserialize: grpc.deserialize<recipes_pb.RecipeArray>;
}
interface IrpcRecipeServiceService_IsearchRecipes extends grpc.MethodDefinition<recipes_pb.RecipeSearchRequest, recipes_pb.RecipeSearchResponse> {
    path: string; // "/recipes.rpcRecipeService/searchRecipes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.RecipeSearchRequest>;
    requestDeserialize: grpc.deserialize<recipes_pb.RecipeSearchRequest>;
    responseSerialize: grpc.serialize<recipes_pb.RecipeSearchResponse>;
    responseDeserialize: grpc.deserialize<recipes_pb.RecipeSearchResponse>;
}
interface IrpcRecipeServiceService_IbrowseRecipes extends grpc.MethodDefinition<recipes_pb.RecipeBrowseRequest, recipes_pb.RecipeBrowseResponse> {
    path: string; // "/recipes.rpcRecipeService/browseRecipes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.RecipeBrowseRequest>;
    requestDeserialize: grpc.deserialize<recipes_pb.RecipeBrowseRequest>;
    responseSerialize: grpc.serialize<recipes_pb.RecipeBrowseResponse>;
    responseDeserialize: grpc.deserialize<recipes_pb.RecipeBrowseResponse>;
}
interface IrpcRecipeServiceService_IgetMyRecipes extends grpc.MethodDefinition<recipes_pb.RecipeLibraryRequest, recipes_pb.RecipeLibraryResponse> {
    path: string; // "/recipes.rpcRecipeService/getMyRecipes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.RecipeLibraryRequest>;
    requestDeserialize: grpc.deserialize<recipes_pb.RecipeLibraryRequest>;
    responseSerialize: grpc.serialize<recipes_pb.RecipeLibraryResponse>;
    responseDeserialize: grpc.deserialize<recipes_pb.RecipeLibraryResponse>;
}
interface IrpcRecipeServiceService_IupdateRecipe extends grpc.MethodDefinition<recipes_pb.Recipe, recipes_pb.requestResponse> {
    path: string; // "/recipes.rpcRecipeService/updateRecipe"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.Recipe>;
    requestDeserialize: grpc.deserialize<recipes_pb.Recipe>;
    responseSerialize: grpc.serialize<recipes_pb.requestResponse>;
    responseDeserialize: grpc.deserialize<recipes_pb.requestResponse>;
}
interface IrpcRecipeServiceService_IdeleteRecipe extends grpc.MethodDefinition<recipes_pb.Recipe, recipes_pb.requestResponse> {
    path: string; // "/recipes.rpcRecipeService/deleteRecipe"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<recipes_pb.Recipe>;
    requestDeserialize: grpc.deserialize<recipes_pb.Recipe>;
    responseSerialize: grpc.serialize<recipes_pb.requestResponse>;
    responseDeserialize: grpc.deserialize<recipes_pb.requestResponse>;
}

export const rpcRecipeServiceService: IrpcRecipeServiceService;

export interface IrpcRecipeServiceServer {
    createRecipes: grpc.handleUnaryCall<recipes_pb.Recipe, recipes_pb.requestResponse>;
    createUnprocessedRecipe: grpc.handleUnaryCall<recipes_pb.UnprocessedRecipe, recipes_pb.requestResponse>;
    getAllRecipes: grpc.handleUnaryCall<recipes_pb.RecipeAllRequest, recipes_pb.RecipeArray>;
    searchRecipes: grpc.handleUnaryCall<recipes_pb.RecipeSearchRequest, recipes_pb.RecipeSearchResponse>;
    browseRecipes: grpc.handleUnaryCall<recipes_pb.RecipeBrowseRequest, recipes_pb.RecipeBrowseResponse>;
    getMyRecipes: grpc.handleUnaryCall<recipes_pb.RecipeLibraryRequest, recipes_pb.RecipeLibraryResponse>;
    updateRecipe: grpc.handleUnaryCall<recipes_pb.Recipe, recipes_pb.requestResponse>;
    deleteRecipe: grpc.handleUnaryCall<recipes_pb.Recipe, recipes_pb.requestResponse>;
}

export interface IrpcRecipeServiceClient {
    createRecipes(request: recipes_pb.Recipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    createRecipes(request: recipes_pb.Recipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    createRecipes(request: recipes_pb.Recipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    createUnprocessedRecipe(request: recipes_pb.UnprocessedRecipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    createUnprocessedRecipe(request: recipes_pb.UnprocessedRecipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    createUnprocessedRecipe(request: recipes_pb.UnprocessedRecipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    getAllRecipes(request: recipes_pb.RecipeAllRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeArray) => void): grpc.ClientUnaryCall;
    getAllRecipes(request: recipes_pb.RecipeAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeArray) => void): grpc.ClientUnaryCall;
    getAllRecipes(request: recipes_pb.RecipeAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeArray) => void): grpc.ClientUnaryCall;
    searchRecipes(request: recipes_pb.RecipeSearchRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeSearchResponse) => void): grpc.ClientUnaryCall;
    searchRecipes(request: recipes_pb.RecipeSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeSearchResponse) => void): grpc.ClientUnaryCall;
    searchRecipes(request: recipes_pb.RecipeSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeSearchResponse) => void): grpc.ClientUnaryCall;
    browseRecipes(request: recipes_pb.RecipeBrowseRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeBrowseResponse) => void): grpc.ClientUnaryCall;
    browseRecipes(request: recipes_pb.RecipeBrowseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeBrowseResponse) => void): grpc.ClientUnaryCall;
    browseRecipes(request: recipes_pb.RecipeBrowseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeBrowseResponse) => void): grpc.ClientUnaryCall;
    getMyRecipes(request: recipes_pb.RecipeLibraryRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeLibraryResponse) => void): grpc.ClientUnaryCall;
    getMyRecipes(request: recipes_pb.RecipeLibraryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeLibraryResponse) => void): grpc.ClientUnaryCall;
    getMyRecipes(request: recipes_pb.RecipeLibraryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeLibraryResponse) => void): grpc.ClientUnaryCall;
    updateRecipe(request: recipes_pb.Recipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    updateRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    updateRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    deleteRecipe(request: recipes_pb.Recipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    deleteRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    deleteRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
}

export class rpcRecipeServiceClient extends grpc.Client implements IrpcRecipeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createRecipes(request: recipes_pb.Recipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public createRecipes(request: recipes_pb.Recipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public createRecipes(request: recipes_pb.Recipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public createUnprocessedRecipe(request: recipes_pb.UnprocessedRecipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public createUnprocessedRecipe(request: recipes_pb.UnprocessedRecipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public createUnprocessedRecipe(request: recipes_pb.UnprocessedRecipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public getAllRecipes(request: recipes_pb.RecipeAllRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeArray) => void): grpc.ClientUnaryCall;
    public getAllRecipes(request: recipes_pb.RecipeAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeArray) => void): grpc.ClientUnaryCall;
    public getAllRecipes(request: recipes_pb.RecipeAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeArray) => void): grpc.ClientUnaryCall;
    public searchRecipes(request: recipes_pb.RecipeSearchRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeSearchResponse) => void): grpc.ClientUnaryCall;
    public searchRecipes(request: recipes_pb.RecipeSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeSearchResponse) => void): grpc.ClientUnaryCall;
    public searchRecipes(request: recipes_pb.RecipeSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeSearchResponse) => void): grpc.ClientUnaryCall;
    public browseRecipes(request: recipes_pb.RecipeBrowseRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeBrowseResponse) => void): grpc.ClientUnaryCall;
    public browseRecipes(request: recipes_pb.RecipeBrowseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeBrowseResponse) => void): grpc.ClientUnaryCall;
    public browseRecipes(request: recipes_pb.RecipeBrowseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeBrowseResponse) => void): grpc.ClientUnaryCall;
    public getMyRecipes(request: recipes_pb.RecipeLibraryRequest, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeLibraryResponse) => void): grpc.ClientUnaryCall;
    public getMyRecipes(request: recipes_pb.RecipeLibraryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeLibraryResponse) => void): grpc.ClientUnaryCall;
    public getMyRecipes(request: recipes_pb.RecipeLibraryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.RecipeLibraryResponse) => void): grpc.ClientUnaryCall;
    public updateRecipe(request: recipes_pb.Recipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public updateRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public updateRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public deleteRecipe(request: recipes_pb.Recipe, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public deleteRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
    public deleteRecipe(request: recipes_pb.Recipe, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: recipes_pb.requestResponse) => void): grpc.ClientUnaryCall;
}
