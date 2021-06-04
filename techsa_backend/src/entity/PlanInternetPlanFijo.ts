import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Servicio } from './Servicio';
import { PlanInternet } from './PlanInternet';
import { PlanFijo } from './PlanFijo';
import { PlanMovil } from './PlanMovil';

@Entity()
export class PlanInternetPlanFijo{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    IdServicio:Servicio

    @ManyToOne(type => PlanInternet)
    IdPlanInternet:Servicio
    
    @ManyToOne(type => PlanFijo)
    IdPlanFijo:Servicio

    @Column()
    PrecioMensual:Number;

}