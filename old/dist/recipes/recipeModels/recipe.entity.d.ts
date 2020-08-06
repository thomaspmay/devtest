import { MetaDataEntity } from "./metadata.entity";
import { IngredientEntity } from "./ingredient.entity";
export declare class RecipeEntity {
    id: number;
    title: string;
    description: string;
    image: number;
    instructions: string[];
    tags: string[];
    ingredients: IngredientEntity[];
    metadata: MetaDataEntity;
}
