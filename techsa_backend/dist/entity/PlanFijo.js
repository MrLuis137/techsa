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
var PlanFijo = /** @class */ (function () {
    function PlanFijo() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], PlanFijo.prototype, "ID", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Servicio_1.Servicio; }),
        __metadata("design:type", Servicio_1.Servicio)
    ], PlanFijo.prototype, "IdServicio", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PlanFijo.prototype, "NombrePlan", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PlanFijo.prototype, "PrecioMensual", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PlanFijo.prototype, "CantMinutos", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PlanFijo.prototype, "TarifaAdicFijoTechsa", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PlanFijo.prototype, "TarifaAdicFijoOtroOperador", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PlanFijo.prototype, "TarifaAdicmovil", void 0);
    PlanFijo = __decorate([
        typeorm_1.Entity()
    ], PlanFijo);
    return PlanFijo;
}());
exports.PlanFijo = PlanFijo;
//# sourceMappingURL=PlanFijo.js.map