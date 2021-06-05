import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, PrimaryColumn } from 'typeorm';
import { CarritoCompras } from './CarritoCompras';
import { Servicio } from './Servicio';

@Entity()
export class ServicioXCarrito{
    @PrimaryGeneratedColumn("increment")
    ID:number
    @ManyToOne(type => CarritoCompras)
    carrto: CarritoCompras;
    @ManyToOne(type => Servicio)
    IdDispositivo:Servicio
}