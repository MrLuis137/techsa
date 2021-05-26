import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Servicio } from './Servicio';
import { PlanInternet } from './PlanInternet';
import { PlanMovil } from './PlanMovil';

@Entity()
export class PlanInternetPlanMovil{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    IdServicio:Servicio

    @ManyToOne(type => PlanInternet)
    IdPlanInternet:Servicio
    
    @ManyToOne(type => PlanMovil)
    IdPlanFijo:PlanMovil

    @Column()
    PrecioMensual:Number;

}