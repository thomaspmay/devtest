import { ingredient } from "./recipeRanking/recipeRanker";

export type unproRecipe = {
    id: number;

    title: string;

    description: string;

    image: string;

    instructions: string[];

    unproIngredients: string[];

    tags: string[];

    ingredients: ingredient[];
}