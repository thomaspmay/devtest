export type UnitType = {
    type: MassUnit | DistanceUnit | AreaUnit | VolumeUnit | TempUnit | TimeUnit;
}

export interface Unit {
    unit: String
}

export interface MassUnit extends Unit {
    unit: "mcg" | "mg" | "g" | "kg" | "oz" | "lb" | "mt" | "t";
}

export interface DistanceUnit extends Unit {
    unit: "mm" | "cm" | "m" | "km" | "in" | "ft-us" | "ft" | "mi";
}

export interface AreaUnit extends Unit {
    unit: "mm2" | "cm2" | "m2" | "ha" | "km2" | "in2" | "ft2" | "ac" | "mi2";
}

export interface VolumeUnit extends Unit {
    unit: "mm3" | "cm3" | "ml" | "l" | "kl" | "m3" | "km3" | "tsp" | "Tbs" | "in3" | "fl-oz" | "cup" | "pnt" | "qt" | "gal" | "ft3" | "yd3";
}

export interface TempUnit extends Unit {
    unit: "C" | "F" | "K" | "R";
}

export interface TimeUnit extends Unit {
    unit: "ms" | "s" | "min" | "h" | "d" | "week" | "month" | "year";
}

export type conversion = {
    unitType,
    convertUp,
    convertDown
}

let timeUnits:string[] = [ "s", "min", "h", "d", "week", "month", "year" ];

// let conversionList: number[][] = 
//     [1,60,60,24,


