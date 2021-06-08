import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { CarritoCompras } from './CarritoCompras';

@Entity()
export class Cliente{
    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column()
    Nombre: String;

    @Column()
    Apellido: String;

    @Column()
    Residencia: String;

    @Column()
    Correo: String;

    @Column()
    NombreUsuario: String;

    @Column()
    Contrasenia: String;

    @OneToOne(type => CarritoCompras)
    @JoinColumn()
    IdCliente:CarritoCompras
}