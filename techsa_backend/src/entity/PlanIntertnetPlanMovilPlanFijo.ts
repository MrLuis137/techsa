import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Servicio } from './Servicio';
import { PlanInternet } from './PlanInternet';
import { PlanMovil } from './PlanMovil';
import { PlanFijo } from './PlanFijo';

@Entity()
export class PlanInternetPlanMovilPlanFijo{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    IdServicio:Servicio

    @ManyToOne(type => PlanInternet)
    IdPlanInternet:Servicio
    
    @ManyToOne(type => PlanMovil)
    IdPlanMovil:PlanMovil

    @ManyToOne(type => PlanFijo)
    IdPlanFijo:PlanFijo

    @Column()
    PrecioMensual:Number;
    
}