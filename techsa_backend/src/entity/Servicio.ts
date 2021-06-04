import { Contrato } from './Contrato';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany,JoinColumn, createConnection, Connection, Repository} from 'typeorm';

@Entity()
export class Servicio{

    @PrimaryGeneratedColumn('increment')
    Id:number;

    @Column()
    Nombre: String;

}
