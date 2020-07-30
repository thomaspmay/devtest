import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { MetaDataEntity } from "./metadata.entity";
import { IngredientEntity } from "./ingredient.entity";


@Entity()
export class RecipeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('bytea')
    image: number;

    @Column('varchar', { array: true} )
    instructions: string[];

    @Column('varchar', { array: true} )
    tags: string[];

    // @OneToMany(type => IngredientEntity, IngredientEntity => IngredientEntity.recipe)
    // ingredients: IngredientEntity[]

    // @OneToOne(type => MetaDataEntity)
    // @JoinColumn()
    // metadata: MetaDataEntity;
    
    // @UpdateDateColumn()
    // updatedTime: dateTime;
}


