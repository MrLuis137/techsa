import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Servicio } from './Servicio';

@Entity()
export class PlanFijo{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    IdServicio:Servicio

    @Column()
    NombrePlan: String;

    @Column()
    PrecioMensual:Number;

    @Column()
    Minutos: number;

    @Column()
    FijoTechsa: number;

    @Column()
    FijoOperador: number;

    @Column()
    MovilCualquiera: number;

}