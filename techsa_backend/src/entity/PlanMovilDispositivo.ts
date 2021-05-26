import {PlanMovil} from './PlanMovil'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { type } from 'os';
import { Dispositivo } from './Dispositivo';

@Entity()
export class PlanMovilDispositivo{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => PlanMovil)
    IdPlan: PlanMovil

    @ManyToOne(type => Dispositivo)
    IdDispositivo: Dispositivo

    @Column()
    Precio: number;
}