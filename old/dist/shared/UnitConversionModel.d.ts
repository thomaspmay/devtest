export declare enum UnitType {
    MassUnit = 0,
    DistanceUnit = 1,
    AreaUnit = 2,
    VolumeUnit = 3,
    TempUnit = 4,
    TimeUnit = 5
}
export declare type unitValueSet = {
    unit: string;
    value: number;
};
export interface Unit {
    unitValue: String;
}
export interface MassUnit extends Unit {
    unitValue: "mcg" | "mg" | "g" | "kg" | "oz" | "lb" | "mt" | "t";
}
export interface DistanceUnit extends Unit {
    unitValue: "mm" | "cm" | "m" | "km" | "in" | "ft" | "mi";
}
export interface AreaUnit extends Unit {
    unitValue: "mm2" | "cm2" | "m2" | "ha" | "km2" | "in2" | "ft2" | "ac" | "mi2";
}
export interface VolumeUnit extends Unit {
    unitValue: "mm3" | "cm3" | "ml" | "l" | "tsp" | "Tbs" | "in3" | "fl-oz" | "cup" | "pnt" | "qt" | "gal";
}
export interface TempUnit extends Unit {
    unitValue: "C" | "F" | "K" | "R";
}
export interface TimeUnit extends Unit {
    unitValue: "ms" | "s" | "min" | "h" | "d" | "week" | "month" | "year";
}
