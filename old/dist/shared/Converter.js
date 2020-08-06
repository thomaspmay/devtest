"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Converter {
    constructor(unit, conversion, nextConverter) {
        this.unit.unitValue = unit;
        this.conversion = conversion;
        this.nextConverter = nextConverter;
    }
    reassignNextConverter(nextConverter) {
        this.nextConverter = nextConverter;
    }
    convertAndPass(input, desiredUnit) {
        let answer = input * this.conversion;
        if (desiredUnit == this.unit.unitValue) {
            return answer;
        }
        else {
            if (this.nextConverter == null) {
                throw console.error("ERROR: reached end of chain");
            }
            else {
                return this.nextConverter.convertAndPass(answer, desiredUnit);
            }
        }
    }
}
class ConverterChain {
    constructor(unit, conversion, unitType) {
        this.converterChain.push(new Converter("mm", conversion));
        this.unitType = unitType;
    }
    createConverter(unit, conversion) {
        if (typeof (this.unitType) !== typeof (unit)) {
            throw console.error("ERROR incompatable converter type with chain");
        }
        else {
            let previousConverter = this.converterChain[this.converterChain.length - 1];
            this.converterChain.push(new Converter(unit, conversion, previousConverter));
        }
    }
}
class ConverterSystem {
    constructor() {
        let distanceValues = [
            { unit: "mm", value: 304.8 },
            { unit: "cm", value: 0.1 },
            { unit: "m", value: 0.01 },
            { unit: "in", value: 39.3701 },
            { unit: "ft", value: 0.0833333 }
        ];
        let distanceType;
        this.setUp(distanceValues, distanceType);
        let volumeValues = [
            { unit: "mm3", value: 304.8 },
            { unit: "cm3", value: 0.1 },
            { unit: "ml", value: 0.01 },
            { unit: "l", value: 39.3701 },
            { unit: "tsp", value: 0.0833333 },
            { unit: "Tbs", value: 304.8 },
            { unit: "in3", value: 0.1 },
            { unit: "fl-oz", value: 0.01 },
            { unit: "pnt", value: 0.0833333 },
            { unit: "qt", value: 39.3701 },
            { unit: "gal", value: 0.0833333 }
        ];
        let volumeType;
        this.setUp(volumeValues, volumeType);
        let massValues = [
            { unit: "mcg", value: 1 },
            { unit: "mg", value: 1 },
            { unit: "g", value: 1 },
            { unit: "kg", value: 1 },
            { unit: "oz", value: 1 },
            { unit: "lb", value: 1 },
        ];
        let massType;
        this.setUp(massValues, massType);
        let temperatureValues = [
            { unit: "C", value: 304.8 },
            { unit: "F", value: 0.1 },
            { unit: "K", value: 0.01 },
            { unit: "R", value: 39.3701 },
        ];
        let temperatureType;
        this.setUp(temperatureValues, temperatureType);
        let timeValues = [
            { unit: "mm", value: 304.8 },
            { unit: "cm", value: 0.1 },
            { unit: "m", value: 0.01 },
            { unit: "in", value: 39.3701 },
            { unit: "ft", value: 0.0833333 }
        ];
        let timeType;
        this.setUp(timeValues, timeType);
    }
    setUp(valueSet, type) {
        let unitConverter = new ConverterChain(valueSet[0].unit, valueSet[0].value, type);
        for (let i = 1; i < valueSet.length; i++) {
            unitConverter.createConverter(valueSet[i].unit, valueSet[i].value);
        }
        let converterChain = unitConverter.converterChain;
        converterChain[0].reassignNextConverter(converterChain[converterChain.length - 1]);
    }
}
//# sourceMappingURL=Converter.js.map