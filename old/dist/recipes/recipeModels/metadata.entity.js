"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataEntity = void 0;
const typeorm_1 = require("typeorm");
class MetaDataEntity {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "cookTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MetaDataEntity.prototype, "difficulty", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "serves", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "kcal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "fat", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "saturates", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "carbs", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "sugar", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "fibre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "protein", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MetaDataEntity.prototype, "salt", void 0);
exports.MetaDataEntity = MetaDataEntity;
//# sourceMappingURL=metadata.entity.js.map