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
var typeorm_1 = require("typeorm");
var Servicio_1 = require("./Servicio");
var PlanInternet = /** @class */ (function () {
    function PlanInternet() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], PlanInternet.prototype, "ID", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Servicio_1.Servicio; }),
        __metadata("design:type", Servicio_1.Servicio)
    ], PlanInternet.prototype, "IdServicio", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PlanInternet.prototype, "NombrePlan", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PlanInternet.prototype, "Velocidad", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PlanInternet.prototype, "Descripcion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PlanInternet.prototype, "PrecioMensual", void 0);
    PlanInternet = __decorate([
        typeorm_1.Entity()
    ], PlanInternet);
    return PlanInternet;
}());
exports.PlanInternet = PlanInternet;
//# sourceMappingURL=PlanInternet.js.map