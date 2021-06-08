import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, createConnection, Connection, Repository} from 'typeorm';
import { Servicio } from './Servicio';


@Entity()
export class PlanMovil{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    idServicio:Servicio

    @Column()
    TipoPlan: String;

    @Column()
    NombrePlan: String;

    @Column()
    Descripcion: String;

    @Column()
    PrecioMensual:Number;

    @Column()
    Minutos: number;

    @Column()
    GBInternet: number;

    @Column()
    CostoLlamada: number;

}
