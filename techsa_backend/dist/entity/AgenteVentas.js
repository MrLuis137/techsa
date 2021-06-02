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
var AgenteVentas = /** @class */ (function () {
    function AgenteVentas() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], AgenteVentas.prototype, "Id_laboral", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AgenteVentas.prototype, "Nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AgenteVentas.prototype, "Usuario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AgenteVentas.prototype, "Cedula", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], AgenteVentas.prototype, "FechaNacimiento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AgenteVentas.prototype, "Puesto", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AgenteVentas.prototype, "Contrasenia", void 0);
    AgenteVentas = __decorate([
        typeorm_1.Entity()
    ], AgenteVentas);
    return AgenteVentas;
}());
exports.AgenteVentas = AgenteVentas;
//# sourceMappingURL=AgenteVentas.js.map