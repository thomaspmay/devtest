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
exports.RecipeEntity = void 0;
const typeorm_1 = require("typeorm");
const metadata_entity_1 = require("./metadata.entity");
const ingredient_entity_1 = require("./ingredient.entity");
let RecipeEntity = class RecipeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RecipeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RecipeEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RecipeEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('bytea'),
    __metadata("design:type", Number)
], RecipeEntity.prototype, "image", void 0);
__decorate([
    typeorm_1.Column('varchar', { array: true }),
    __metadata("design:type", Array)
], RecipeEntity.prototype, "instructions", void 0);
__decorate([
    typeorm_1.Column('varchar', { array: true }),
    __metadata("design:type", Array)
], RecipeEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.OneToMany(type => ingredient_entity_1.IngredientEntity, IngredientEntity => IngredientEntity.recipe),
    __metadata("design:type", Array)
], RecipeEntity.prototype, "ingredients", void 0);
__decorate([
    typeorm_1.OneToOne(type => metadata_entity_1.MetaDataEntity),
    typeorm_1.JoinColumn(),
    __metadata("design:type", metadata_entity_1.MetaDataEntity)
], RecipeEntity.prototype, "metadata", void 0);
RecipeEntity = __decorate([
    typeorm_1.Entity()
], RecipeEntity);
exports.RecipeEntity = RecipeEntity;
//# sourceMappingURL=recipe.entity.js.map