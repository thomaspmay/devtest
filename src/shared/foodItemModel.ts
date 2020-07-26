export interface foodItemModel {
    fullString: string,
    amount: number,
    unit: number,
    adjectives: string[],
    foodName: string,
    dateAdded: Date,
    expiryDate: Date,
    roughShelfLife: number, //days
    tags: string[]
}