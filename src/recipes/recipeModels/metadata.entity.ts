import { PrimaryGeneratedColumn, Column } from "typeorm";

export class MetaDataEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    cookTime: number; //in minutes
    
    @Column()
    difficulty: "EASY" | "MEDIUM" | "HARD";
    
    @Column()
    serves: number; // in people
    // all following nutritional info should be per serving and in grams (excluding kcal)
    
    @Column()
    kcal: number;
    
    @Column()
    fat: number;
    
    @Column()
    saturates: number;
    
    @Column()
    carbs: number;
    
    @Column()
    sugar: number;
    
    @Column()
    fibre: number;
    
    @Column()
    protein: number;
    
    @Column()
    salt: number;
}