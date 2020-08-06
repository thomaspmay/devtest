import { RecipeEntity } from "./recipe.entity";
export declare class IngredientEntity {
    id: number;
    text: string;
    Amount: number;
    lowerBoundAmount: number;
    upperBoundAmount: number;
    unit: string;
    standardisedAmount: number;
    standardisedUnit: string;
    crucial: boolean;
    name: string;
    tags: string[];
    adjectives: string[];
    recipe: RecipeEntity;
}
