import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Cliente } from "./Cliente";

@Entity()
export class CarritoCompras{
    @PrimaryGeneratedColumn('increment')
    IdCarrito: number;
    @OneToOne(type => Cliente)
    @JoinColumn()
    IdCliente:Cliente
}