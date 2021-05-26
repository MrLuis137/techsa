import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Servicio } from './Servicio';

@Entity()
export class PlanInternet{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    IdServicio:Servicio

    @Column()
    NombrePlan: String;

    @Column()
    Velocidad: number;

    @Column()
    Descripcion: String;

    @Column()
    PrecioMensual:Number;


}