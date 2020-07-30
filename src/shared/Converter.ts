import {Unit, UnitType, unitValueSet, AreaUnit, TimeUnit, DistanceUnit, VolumeUnit, TempUnit, MassUnit} from './UnitConversionModel';


class Converter {
    unit: Unit;
    conversion: number;
    nextConverter: Converter;

    constructor(unit: String, conversion: number, nextConverter ?: Converter){
        this.unit.unitValue = unit;
        this.conversion = conversion;
        this.nextConverter = nextConverter;
    }

    reassignNextConverter(nextConverter: Converter){
        this.nextConverter = nextConverter;
    }

    convertAndPass(input: number, desiredUnit: string){
        let answer: number = input * this.conversion;
        if(desiredUnit == this.unit.unitValue){
            return answer;
        } else {
            if(this.nextConverter == null){
                throw console.error("ERROR: reached end of chain");
            } else {
                return this.nextConverter.convertAndPass(answer,desiredUnit); 
            }
        }
    }
}

class ConverterChain {
    converterChain: Converter[];
    unitType: Unit;

    constructor(unit: string, conversion: number,unitType: AreaUnit | TempUnit | TimeUnit | DistanceUnit | VolumeUnit | MassUnit){
        this.converterChain.push(new Converter("mm", conversion));
        this.unitType = unitType;
    }

    createConverter(unit: string, conversion: number){
        if(typeof(this.unitType) !== typeof(unit)){
            throw console.error("ERROR incompatable converter type with chain");
        } else {
            let previousConverter: Converter = this.converterChain[this.converterChain.length-1];
            this.converterChain.push(new Converter(unit,conversion, previousConverter));
        }
    }
}

class ConverterSystem {
    constructor(){
        
        // distance converter
        // "mm" | "cm" | "m" | "km" | "in" | "ft" | "mi";
        let distanceValues: unitValueSet[] = [
            {unit: "mm", value: 304.8}, // ft to mm
            {unit: "cm", value: 0.1}, // mm to cm
            {unit: "m", value: 0.01}, // cm to m
            {unit: "in", value: 39.3701}, // m to in
            {unit: "ft", value: 0.0833333} // in to ft 304.8
        ]
        let distanceType: DistanceUnit;
        this.setUp(distanceValues, distanceType);

        // area converter TBC
        // "mm2" | "cm2" | "m2" | "ha" | "km2" | "in2" | "ft2" | "ac" | "mi2";


        // volume converter
        // "mm3" | "cm3" | "ml" | "l" | "tsp" | "Tbs" | "in3" | "fl-oz" | "cup" | "pnt" | "qt" | "gal";
        
        let volumeValues: unitValueSet[] = [
            {unit: "mm3", value: 304.8}, // mm3 to cm3
            {unit: "cm3", value: 0.1}, // cm3 to cm
            {unit: "ml", value: 0.01}, // cm to m
            {unit: "l", value: 39.3701}, // m to in
            {unit: "tsp", value: 0.0833333}, // in to ft
            {unit: "Tbs", value: 304.8}, // ft to mm
            {unit: "in3", value: 0.1}, // mm to cm
            {unit: "fl-oz", value: 0.01}, // cm to m
            // {unit: "cup", value: 39.3701},  REQUEIRES SPECIAL TREATMENT
            {unit: "pnt", value: 0.0833333}, // in to ft
            {unit: "qt", value: 39.3701}, // m to in
            {unit: "gal", value: 0.0833333} // in to ft
        ]
        let volumeType: VolumeUnit;
        this.setUp(volumeValues, volumeType);
        
        // mass converter
        // "mcg" | "mg" | "g" | "kg" | "oz" | "lb";

        let massValues: unitValueSet[] = [
            {unit: "mcg", value: 1},
            {unit: "mg", value: 1},
            {unit: "g", value: 1},
            {unit: "kg", value: 1},
            {unit: "oz", value: 1},
            {unit: "lb", value: 1},
        ]
        let massType: VolumeUnit;
        this.setUp(massValues, massType);

        // temperature converter
        // "C" | "F" | "K" | "R";

        let temperatureValues: unitValueSet[] = [
            {unit: "C", value: 304.8}, // C to F
            {unit: "F", value: 0.1}, // F to K
            {unit: "K", value: 0.01}, // K to R
            {unit: "R", value: 39.3701}, // R to C
        ]
        let temperatureType: DistanceUnit;
        this.setUp(temperatureValues, temperatureType);

        // time converter 
        // "ms" | "s" | "min" | "h" | "d" | "week" | "month" | "year";

        let timeValues: unitValueSet[] = [
            {unit: "mm", value: 304.8}, // ft to mm
            {unit: "cm", value: 0.1}, // mm to cm
            {unit: "m", value: 0.01}, // cm to m
            {unit: "in", value: 39.3701}, // m to in
            {unit: "ft", value: 0.0833333} // in to ft 304.8
        ]
        let timeType: TimeUnit;
        this.setUp(timeValues, timeType);

    }

    setUp(valueSet: unitValueSet[],type: any){
        let unitConverter :ConverterChain = new ConverterChain(valueSet[0].unit,valueSet[0].value,type); 
        for(let i = 1; i < valueSet.length; i++){
            unitConverter.createConverter(valueSet[i].unit,valueSet[i].value);
        }
        // finally loop chain backround to make circular
        let converterChain: Converter[] = unitConverter.converterChain;
        converterChain[0].reassignNextConverter(converterChain[converterChain.length-1]);
    }
}