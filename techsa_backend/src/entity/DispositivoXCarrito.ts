import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, PrimaryColumn } from 'typeorm';
import { Dispositivo } from './Dispositivo';
import { CarritoCompras } from './CarritoCompras';


@Entity()
export class DispositivoXCarrito{
    @PrimaryGeneratedColumn("increment")
    ID:number
    @ManyToOne(type => CarritoCompras)
    carrto: CarritoCompras;
    @ManyToOne(type => Dispositivo)
    IdDispositivo:Dispositivo
}