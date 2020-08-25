import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

export function createRecipeEntity(tableName: string) {
    @Entity({name: tableName})
    class EntityClass {
        public static tableName = tableName;

        @PrimaryColumn()
        public name: string = "";

        @Column()
        public value: number = 0;
    }

    return EntityClass;
}

export function createIngredientEntity(tableName: string): {
    @Entity({name: tableName})
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
    
        @ManyToOne(type => RecipeEntity, RecipeEntity => RecipeEntity.ingredients)
        recipe: RecipeEntity;
    }

    return new IngredientEntity();
}

export function createMetadataEntity(tableName: string) {
    @Entity({name: tableName})
    class EntityClass {
        public static tableName = tableName;

        @PrimaryColumn()
        public name: string = "";

        @Column()
        public value: number = 0;
    }

    return EntityClass;
}

export function createFoodEntity(tableName: string) {
    @Entity({name: tableName})
    class EntityClass {
        public static tableName = tableName;

        @PrimaryColumn()import { Entity, PrimaryColumn, Column } from 'typeorm'
        public name: string = "";

        @Column()
        public value: number = 0;
    }

    return EntityClass;
}