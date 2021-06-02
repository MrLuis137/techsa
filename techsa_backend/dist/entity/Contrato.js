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
var Cliente_1 = require("./Cliente");
var typeorm_1 = require("typeorm");
var Servicio_1 = require("./Servicio");
var Contrato = /** @class */ (function () {
    function Contrato() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Contrato.prototype, "Id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Servicio_1.Servicio; }), typeorm_1.JoinColumn(),
        __metadata("design:type", Servicio_1.Servicio)
    ], Contrato.prototype, "IdServicio", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Cliente_1.Cliente; }), typeorm_1.JoinColumn(),
        __metadata("design:type", Cliente_1.Cliente)
    ], Contrato.prototype, "IdCliente", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Contrato.prototype, "FechaContratado", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Contrato.prototype, "Estado", void 0);
    Contrato = __decorate([
        typeorm_1.Entity()
    ], Contrato);
    return Contrato;
}());
exports.Contrato = Contrato;
//# sourceMappingURL=Contrato.js.map