import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Servicio } from './Servicio';

@Entity()
export class PlanMovil{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    IdServicio:Servicio

    @Column()
    TipoPlan: String;

    @Column()
    NombrePlan: String;

    @Column()
    Descripcion: String;

    @Column()
    PrecioMensual:Number;

    @Column()
    PecioLlamadas: number;

}