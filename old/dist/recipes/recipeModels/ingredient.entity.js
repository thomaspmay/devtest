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
exports.IngredientEntity = void 0;
const typeorm_1 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
class IngredientEntity {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], IngredientEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], IngredientEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], IngredientEntity.prototype, "Amount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], IngredientEntity.prototype, "lowerBoundAmount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], IngredientEntity.prototype, "upperBoundAmount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], IngredientEntity.prototype, "unit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], IngredientEntity.prototype, "standardisedAmount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], IngredientEntity.prototype, "standardisedUnit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], IngredientEntity.prototype, "crucial", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], IngredientEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Array)
], IngredientEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Array)
], IngredientEntity.prototype, "adjectives", void 0);
__decorate([
    typeorm_1.ManyToOne(type => recipe_entity_1.RecipeEntity, RecipeEntity => RecipeEntity.ingredients),
    __metadata("design:type", recipe_entity_1.RecipeEntity)
], IngredientEntity.prototype, "recipe", void 0);
exports.IngredientEntity = IngredientEntity;
//# sourceMappingURL=ingredient.entity.js.map