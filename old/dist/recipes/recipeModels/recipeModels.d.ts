import { UnitType } from '../../shared/UnitConversionModel';
export declare type recipeArray = {
    recipeArray: Recipe[];
};
export declare type Recipe = {
    id: number;
    title: string;
    desc: string;
    image: Blob;
    instructions: string[];
    ingredients: Ingredient[];
    tags: string[];
    metadata: MetaData;
};
export declare type Ingredient = {
    text: string;
    Amount: number;
    lowerBoundAmount: number;
    upperBoundAmount: number;
    unit: UnitType;
    standardisedAmount: number;
    standardisedUnit: UnitType;
    crucial: boolean;
    name: string;
    tags: string[];
    adjectives: string[];
};
export declare type MetaData = {
    cookTime: number;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    serves: number;
    kcal: number;
    fat: number;
    saturates: number;
    carbs: number;
    sugar: number;
    fibre: number;
    protein: number;
    salt: number;
};
export declare type UnprocessedRecipe = {
    id: number;
    title: string;
    desc: string;
    image: string;
    instructions: string[];
    ingredients: string[];
    tags: string[];
    metadata: MetaData;
};
