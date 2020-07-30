import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RecipeEntity } from "./recipe.entity";

export class IngredientEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    Amount: number;

    @Column()
    lowerBoundAmount: number;

    @Column()
    upperBoundAmount: number;

    @Column()
    unit: string;

    @Column()
    standardisedAmount: number;

    @Column()
    standardisedUnit: string;

    @Column()
    crucial: boolean;

    @Column()
    name: string;

    @Column()
    tags: string[];

    @Column()
    adjectives: string[];

    // @ManyToOne(type => RecipeEntity, RecipeEntity => RecipeEntity.ingredients)
    // recipe: RecipeEntity;
}
