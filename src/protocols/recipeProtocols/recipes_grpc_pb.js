// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var recipes_pb = require('./recipes_pb.js');

function serialize_recipes_Recipe(arg) {
  if (!(arg instanceof recipes_pb.Recipe)) {
    throw new Error('Expected argument of type recipes.Recipe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_Recipe(buffer_arg) {
  return recipes_pb.Recipe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeAllRequest(arg) {
  if (!(arg instanceof recipes_pb.RecipeAllRequest)) {
    throw new Error('Expected argument of type recipes.RecipeAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeAllRequest(buffer_arg) {
  return recipes_pb.RecipeAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeArray(arg) {
  if (!(arg instanceof recipes_pb.RecipeArray)) {
    throw new Error('Expected argument of type recipes.RecipeArray');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeArray(buffer_arg) {
  return recipes_pb.RecipeArray.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeBrowseRequest(arg) {
  if (!(arg instanceof recipes_pb.RecipeBrowseRequest)) {
    throw new Error('Expected argument of type recipes.RecipeBrowseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeBrowseRequest(buffer_arg) {
  return recipes_pb.RecipeBrowseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeBrowseResponse(arg) {
  if (!(arg instanceof recipes_pb.RecipeBrowseResponse)) {
    throw new Error('Expected argument of type recipes.RecipeBrowseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeBrowseResponse(buffer_arg) {
  return recipes_pb.RecipeBrowseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeLibraryRequest(arg) {
  if (!(arg instanceof recipes_pb.RecipeLibraryRequest)) {
    throw new Error('Expected argument of type recipes.RecipeLibraryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeLibraryRequest(buffer_arg) {
  return recipes_pb.RecipeLibraryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeLibraryResponse(arg) {
  if (!(arg instanceof recipes_pb.RecipeLibraryResponse)) {
    throw new Error('Expected argument of type recipes.RecipeLibraryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeLibraryResponse(buffer_arg) {
  return recipes_pb.RecipeLibraryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeSearchRequest(arg) {
  if (!(arg instanceof recipes_pb.RecipeSearchRequest)) {
    throw new Error('Expected argument of type recipes.RecipeSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeSearchRequest(buffer_arg) {
  return recipes_pb.RecipeSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_RecipeSearchResponse(arg) {
  if (!(arg instanceof recipes_pb.RecipeSearchResponse)) {
    throw new Error('Expected argument of type recipes.RecipeSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_RecipeSearchResponse(buffer_arg) {
  return recipes_pb.RecipeSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_UnprocessedRecipe(arg) {
  if (!(arg instanceof recipes_pb.UnprocessedRecipe)) {
    throw new Error('Expected argument of type recipes.UnprocessedRecipe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_UnprocessedRecipe(buffer_arg) {
  return recipes_pb.UnprocessedRecipe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_requestResponse(arg) {
  if (!(arg instanceof recipes_pb.requestResponse)) {
    throw new Error('Expected argument of type recipes.requestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_requestResponse(buffer_arg) {
  return recipes_pb.requestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var rpcRecipeServiceService = exports.rpcRecipeServiceService = {
  // create
createRecipes: {
    path: '/recipes.rpcRecipeService/createRecipes',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.Recipe,
    responseType: recipes_pb.requestResponse,
    requestSerialize: serialize_recipes_Recipe,
    requestDeserialize: deserialize_recipes_Recipe,
    responseSerialize: serialize_recipes_requestResponse,
    responseDeserialize: deserialize_recipes_requestResponse,
  },
  createUnprocessedRecipe: {
    path: '/recipes.rpcRecipeService/createUnprocessedRecipe',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.UnprocessedRecipe,
    responseType: recipes_pb.requestResponse,
    requestSerialize: serialize_recipes_UnprocessedRecipe,
    requestDeserialize: deserialize_recipes_UnprocessedRecipe,
    responseSerialize: serialize_recipes_requestResponse,
    responseDeserialize: deserialize_recipes_requestResponse,
  },
  // read
getAllRecipes: {
    path: '/recipes.rpcRecipeService/getAllRecipes',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.RecipeAllRequest,
    responseType: recipes_pb.RecipeArray,
    requestSerialize: serialize_recipes_RecipeAllRequest,
    requestDeserialize: deserialize_recipes_RecipeAllRequest,
    responseSerialize: serialize_recipes_RecipeArray,
    responseDeserialize: deserialize_recipes_RecipeArray,
  },
  searchRecipes: {
    path: '/recipes.rpcRecipeService/searchRecipes',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.RecipeSearchRequest,
    responseType: recipes_pb.RecipeSearchResponse,
    requestSerialize: serialize_recipes_RecipeSearchRequest,
    requestDeserialize: deserialize_recipes_RecipeSearchRequest,
    responseSerialize: serialize_recipes_RecipeSearchResponse,
    responseDeserialize: deserialize_recipes_RecipeSearchResponse,
  },
  browseRecipes: {
    path: '/recipes.rpcRecipeService/browseRecipes',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.RecipeBrowseRequest,
    responseType: recipes_pb.RecipeBrowseResponse,
    requestSerialize: serialize_recipes_RecipeBrowseRequest,
    requestDeserialize: deserialize_recipes_RecipeBrowseRequest,
    responseSerialize: serialize_recipes_RecipeBrowseResponse,
    responseDeserialize: deserialize_recipes_RecipeBrowseResponse,
  },
  getMyRecipes: {
    path: '/recipes.rpcRecipeService/getMyRecipes',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.RecipeLibraryRequest,
    responseType: recipes_pb.RecipeLibraryResponse,
    requestSerialize: serialize_recipes_RecipeLibraryRequest,
    requestDeserialize: deserialize_recipes_RecipeLibraryRequest,
    responseSerialize: serialize_recipes_RecipeLibraryResponse,
    responseDeserialize: deserialize_recipes_RecipeLibraryResponse,
  },
  // update
updateRecipe: {
    path: '/recipes.rpcRecipeService/updateRecipe',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.Recipe,
    responseType: recipes_pb.requestResponse,
    requestSerialize: serialize_recipes_Recipe,
    requestDeserialize: deserialize_recipes_Recipe,
    responseSerialize: serialize_recipes_requestResponse,
    responseDeserialize: deserialize_recipes_requestResponse,
  },
  // delete
deleteRecipe: {
    path: '/recipes.rpcRecipeService/deleteRecipe',
    requestStream: false,
    responseStream: false,
    requestType: recipes_pb.Recipe,
    responseType: recipes_pb.requestResponse,
    requestSerialize: serialize_recipes_Recipe,
    requestDeserialize: deserialize_recipes_Recipe,
    responseSerialize: serialize_recipes_requestResponse,
    responseDeserialize: deserialize_recipes_requestResponse,
  },
};

exports.rpcRecipeServiceClient = grpc.makeGenericClientConstructor(rpcRecipeServiceService);
