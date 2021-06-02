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
var Gerente = /** @class */ (function () {
    function Gerente() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Gerente.prototype, "id_laboral", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gerente.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gerente.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Gerente.prototype, "cedula", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Gerente.prototype, "fechaNacimiento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gerente.prototype, "puesto", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gerente.prototype, "contrasenia", void 0);
    Gerente = __decorate([
        typeorm_1.Entity()
    ], Gerente);
    return Gerente;
}());
exports.Gerente = Gerente;
//# sourceMappingURL=Gerente.js.map