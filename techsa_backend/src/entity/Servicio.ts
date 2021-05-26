import { Contrato } from './Contrato';
import{PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn} from 'typeorm'

@Entity()
export class Servicio{

    @PrimaryGeneratedColumn('increment')
    Id:number;

    @Column()
    Nombre: String;


}