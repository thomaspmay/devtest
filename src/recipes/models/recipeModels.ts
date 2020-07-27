import { UnitType } from '../../shared/UnitConversionModel'

export type recipeArray = {
    recipeArray: Recipe[];
}

export type Recipe = {
    id: number,
    title: string,
    desc: string,
    image: Blob,
    instructions: string[],
    ingredients: Ingredient[],
    tags: string[],
    metadata: MetaData,
}

export type Ingredient = {
    text: string,
    Amount: number,
    lowerBoundAmount: number,
    upperBoundAmount: number,
    unit: UnitType,
    standardisedAmount: number,
    standardisedUnit: UnitType,
    crucial: boolean,
    name: string,
    tags: string[],
    adjectives: string[],
}

export type MetaData = {
    cookTime: number, //in minutes
    difficulty: "EASY" | "MEDIUM" | "HARD",
    serves: number, // in people
    // all following nutritional info should be per serving and in grams (excluding kcal)
    kcal: number,
    fat: number, 
    saturates: number, 
    carbs: number,
    sugar: number,
    fibre: number,
    protein: number,
    salt: number
}

export type UnprocessedRecipe = {
    id: number;
    title: string,
    desc: string,
    image: string, //path to file?
    instructions: string[],
    ingredients: string[],
    tags: string[],
    metadata: MetaData,
}



