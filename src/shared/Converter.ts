import {Unit, UnitType, AreaUnit, TimeUnit, DistanceUnit, VolumeUnit, TempUnit, MassUnit} from './UnitConversionModel';


class Converter {
    unit: String;
    conversion: number;
    nextConverter: Converter;

    constructor(unit: Unit, conversion: number, nextConverter ?: Converter){
        this.unit = new String(unit.unit);
        this.conversion = conversion;
        this.nextConverter = nextConverter;
    }

    reassignNextConverter(nextConverter: Converter){
        this.nextConverter = nextConverter;
    }

    convertAndPass(input: number, desiredUnit: string){
        let answer: number = input * this.conversion;
        if(desiredUnit == this.unit){
            return answer;
        } else {
            if(this.nextConverter == null){
                throw console.error("ERROR: reached end of chain");
            }else {
                return this.nextConverter.convertAndPass(answer,desiredUnit); 
            }
        }
    }
    
}

class ConverterChain {
    converterChain: Converter[];
    unitType: Unit;

    constructor(unit: string, conversion: number,unitType: AreaUnit | TempUnit | TimeUnit | DistanceUnit | VolumeUnit | MassUnit){
        this.converterChain.push(new Converter(unit, conversion));
        this.unitType = unitType;
    }

    createConverter(unit: Unit, conversion: number){
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
        let distanceType: DistanceUnit;
        let distance :ConverterChain = new ConverterChain("mm",1609344,distanceType)
    }
}