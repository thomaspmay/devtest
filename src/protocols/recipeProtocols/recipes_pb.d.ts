// package: recipes
// file: recipes.proto

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

export class RecipeAllRequest extends jspb.Message { 
    getUsercredentials(): string;
    setUsercredentials(value: string): RecipeAllRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeAllRequest): RecipeAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeAllRequest;
    static deserializeBinaryFromReader(message: RecipeAllRequest, reader: jspb.BinaryReader): RecipeAllRequest;
}

export namespace RecipeAllRequest {
    export type AsObject = {
        usercredentials: string,
    }
}

export class RecipeLibraryRequest extends jspb.Message { 
    getUsercredentials(): string;
    setUsercredentials(value: string): RecipeLibraryRequest;

    getLastchange(): string;
    setLastchange(value: string): RecipeLibraryRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeLibraryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeLibraryRequest): RecipeLibraryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeLibraryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeLibraryRequest;
    static deserializeBinaryFromReader(message: RecipeLibraryRequest, reader: jspb.BinaryReader): RecipeLibraryRequest;
}

export namespace RecipeLibraryRequest {
    export type AsObject = {
        usercredentials: string,
        lastchange: string,
    }
}

export class RecipeLibraryResponse extends jspb.Message { 
    getLastchange(): string;
    setLastchange(value: string): RecipeLibraryResponse;

    clearMyrecipesList(): void;
    getMyrecipesList(): Array<Recipe>;
    setMyrecipesList(value: Array<Recipe>): RecipeLibraryResponse;
    addMyrecipes(value?: Recipe, index?: number): Recipe;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeLibraryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeLibraryResponse): RecipeLibraryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeLibraryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeLibraryResponse;
    static deserializeBinaryFromReader(message: RecipeLibraryResponse, reader: jspb.BinaryReader): RecipeLibraryResponse;
}

export namespace RecipeLibraryResponse {
    export type AsObject = {
        lastchange: string,
        myrecipesList: Array<Recipe.AsObject>,
    }
}

export class RecipeBrowseRequest extends jspb.Message { 
    getNewbrowserequest(): boolean;
    setNewbrowserequest(value: boolean): RecipeBrowseRequest;

    getBrowserequestid(): number;
    setBrowserequestid(value: number): RecipeBrowseRequest;

    getPagenumber(): number;
    setPagenumber(value: number): RecipeBrowseRequest;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): RecipeBrowseRequest;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeBrowseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeBrowseRequest): RecipeBrowseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeBrowseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeBrowseRequest;
    static deserializeBinaryFromReader(message: RecipeBrowseRequest, reader: jspb.BinaryReader): RecipeBrowseRequest;
}

export namespace RecipeBrowseRequest {
    export type AsObject = {
        newbrowserequest: boolean,
        browserequestid: number,
        pagenumber: number,
        tagsList: Array<string>,
    }
}

export class RecipeBrowseResponse extends jspb.Message { 
    getBrowserequestid(): number;
    setBrowserequestid(value: number): RecipeBrowseResponse;

    getPagenumber(): number;
    setPagenumber(value: number): RecipeBrowseResponse;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): RecipeBrowseResponse;
    addTags(value: string, index?: number): string;

    clearRecipesList(): void;
    getRecipesList(): Array<Recipe>;
    setRecipesList(value: Array<Recipe>): RecipeBrowseResponse;
    addRecipes(value?: Recipe, index?: number): Recipe;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeBrowseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeBrowseResponse): RecipeBrowseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeBrowseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeBrowseResponse;
    static deserializeBinaryFromReader(message: RecipeBrowseResponse, reader: jspb.BinaryReader): RecipeBrowseResponse;
}

export namespace RecipeBrowseResponse {
    export type AsObject = {
        browserequestid: number,
        pagenumber: number,
        tagsList: Array<string>,
        recipesList: Array<Recipe.AsObject>,
    }
}

export class RecipeSearchRequest extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): RecipeSearchRequest;

    getResultspage(): number;
    setResultspage(value: number): RecipeSearchRequest;

    getUsercredentials(): string;
    setUsercredentials(value: string): RecipeSearchRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeSearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeSearchRequest): RecipeSearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeSearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeSearchRequest;
    static deserializeBinaryFromReader(message: RecipeSearchRequest, reader: jspb.BinaryReader): RecipeSearchRequest;
}

export namespace RecipeSearchRequest {
    export type AsObject = {
        query: string,
        resultspage: number,
        usercredentials: string,
    }
}

export class RecipeSearchResponse extends jspb.Message { 
    getQueryrespondedtoo(): string;
    setQueryrespondedtoo(value: string): RecipeSearchResponse;

    getResultspage(): number;
    setResultspage(value: number): RecipeSearchResponse;

    clearRecipesList(): void;
    getRecipesList(): Array<Recipe>;
    setRecipesList(value: Array<Recipe>): RecipeSearchResponse;
    addRecipes(value?: Recipe, index?: number): Recipe;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeSearchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeSearchResponse): RecipeSearchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeSearchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeSearchResponse;
    static deserializeBinaryFromReader(message: RecipeSearchResponse, reader: jspb.BinaryReader): RecipeSearchResponse;
}

export namespace RecipeSearchResponse {
    export type AsObject = {
        queryrespondedtoo: string,
        resultspage: number,
        recipesList: Array<Recipe.AsObject>,
    }
}

export class RecipeArray extends jspb.Message { 
    clearRecipesList(): void;
    getRecipesList(): Array<Recipe>;
    setRecipesList(value: Array<Recipe>): RecipeArray;
    addRecipes(value?: Recipe, index?: number): Recipe;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeArray.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeArray): RecipeArray.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecipeArray, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeArray;
    static deserializeBinaryFromReader(message: RecipeArray, reader: jspb.BinaryReader): RecipeArray;
}

export namespace RecipeArray {
    export type AsObject = {
        recipesList: Array<Recipe.AsObject>,
    }
}

export class Recipe extends jspb.Message { 
    getId(): number;
    setId(value: number): Recipe;

    getTitle(): string;
    setTitle(value: string): Recipe;

    getDesc(): string;
    setDesc(value: string): Recipe;


    hasImage(): boolean;
    clearImage(): void;
    getImage(): image | undefined;
    setImage(value?: image): Recipe;

    clearInstructionsList(): void;
    getInstructionsList(): Array<string>;
    setInstructionsList(value: Array<string>): Recipe;
    addInstructions(value: string, index?: number): string;

    clearIngredientsList(): void;
    getIngredientsList(): Array<Ingredient>;
    setIngredientsList(value: Array<Ingredient>): Recipe;
    addIngredients(value?: Ingredient, index?: number): Ingredient;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Recipe;
    addTags(value: string, index?: number): string;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): Metadata | undefined;
    setMetadata(value?: Metadata): Recipe;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Recipe.AsObject;
    static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Recipe;
    static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
    export type AsObject = {
        id: number,
        title: string,
        desc: string,
        image?: image.AsObject,
        instructionsList: Array<string>,
        ingredientsList: Array<Ingredient.AsObject>,
        tagsList: Array<string>,
        metadata?: Metadata.AsObject,
    }
}

export class UnprocessedRecipe extends jspb.Message { 
    getId(): number;
    setId(value: number): UnprocessedRecipe;

    getTitle(): string;
    setTitle(value: string): UnprocessedRecipe;

    getDesc(): string;
    setDesc(value: string): UnprocessedRecipe;


    hasImage(): boolean;
    clearImage(): void;
    getImage(): image | undefined;
    setImage(value?: image): UnprocessedRecipe;

    clearInstructionsList(): void;
    getInstructionsList(): Array<string>;
    setInstructionsList(value: Array<string>): UnprocessedRecipe;
    addInstructions(value: string, index?: number): string;

    clearIngredientsList(): void;
    getIngredientsList(): Array<string>;
    setIngredientsList(value: Array<string>): UnprocessedRecipe;
    addIngredients(value: string, index?: number): string;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): UnprocessedRecipe;
    addTags(value: string, index?: number): string;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): Metadata | undefined;
    setMetadata(value?: Metadata): UnprocessedRecipe;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnprocessedRecipe.AsObject;
    static toObject(includeInstance: boolean, msg: UnprocessedRecipe): UnprocessedRecipe.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnprocessedRecipe, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnprocessedRecipe;
    static deserializeBinaryFromReader(message: UnprocessedRecipe, reader: jspb.BinaryReader): UnprocessedRecipe;
}

export namespace UnprocessedRecipe {
    export type AsObject = {
        id: number,
        title: string,
        desc: string,
        image?: image.AsObject,
        instructionsList: Array<string>,
        ingredientsList: Array<string>,
        tagsList: Array<string>,
        metadata?: Metadata.AsObject,
    }
}

export class image extends jspb.Message { 
    getImagename(): string;
    setImagename(value: string): image;

    getImageformat(): string;
    setImageformat(value: string): image;

    getImage(): Uint8Array | string;
    getImage_asU8(): Uint8Array;
    getImage_asB64(): string;
    setImage(value: Uint8Array | string): image;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): image.AsObject;
    static toObject(includeInstance: boolean, msg: image): image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): image;
    static deserializeBinaryFromReader(message: image, reader: jspb.BinaryReader): image;
}

export namespace image {
    export type AsObject = {
        imagename: string,
        imageformat: string,
        image: Uint8Array | string,
    }
}

export class Ingredient extends jspb.Message { 
    getText(): string;
    setText(value: string): Ingredient;

    getAmount(): number;
    setAmount(value: number): Ingredient;

    getLbamount(): number;
    setLbamount(value: number): Ingredient;

    getUbamount(): number;
    setUbamount(value: number): Ingredient;

    getUnittype(): number;
    setUnittype(value: number): Ingredient;

    getSamount(): number;
    setSamount(value: number): Ingredient;

    getSunittype(): number;
    setSunittype(value: number): Ingredient;

    getCrucial(): boolean;
    setCrucial(value: boolean): Ingredient;

    getName(): string;
    setName(value: string): Ingredient;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Ingredient;
    addTags(value: string, index?: number): string;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): Metadata | undefined;
    setMetadata(value?: Metadata): Ingredient;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ingredient.AsObject;
    static toObject(includeInstance: boolean, msg: Ingredient): Ingredient.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ingredient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ingredient;
    static deserializeBinaryFromReader(message: Ingredient, reader: jspb.BinaryReader): Ingredient;
}

export namespace Ingredient {
    export type AsObject = {
        text: string,
        amount: number,
        lbamount: number,
        ubamount: number,
        unittype: number,
        samount: number,
        sunittype: number,
        crucial: boolean,
        name: string,
        tagsList: Array<string>,
        metadata?: Metadata.AsObject,
    }
}

export class Metadata extends jspb.Message { 
    getCooktime(): number;
    setCooktime(value: number): Metadata;

    getDifficulty(): number;
    setDifficulty(value: number): Metadata;

    getServes(): number;
    setServes(value: number): Metadata;

    getKcal(): number;
    setKcal(value: number): Metadata;

    getFat(): number;
    setFat(value: number): Metadata;

    getSaturates(): number;
    setSaturates(value: number): Metadata;

    getCarbs(): number;
    setCarbs(value: number): Metadata;

    getSugar(): number;
    setSugar(value: number): Metadata;

    getFibre(): number;
    setFibre(value: number): Metadata;

    getProtein(): number;
    setProtein(value: number): Metadata;

    getSalt(): number;
    setSalt(value: number): Metadata;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
    export type AsObject = {
        cooktime: number,
        difficulty: number,
        serves: number,
        kcal: number,
        fat: number,
        saturates: number,
        carbs: number,
        sugar: number,
        fibre: number,
        protein: number,
        salt: number,
    }
}
