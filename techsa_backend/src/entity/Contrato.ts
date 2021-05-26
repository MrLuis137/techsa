import { Cliente } from './Cliente';
import{Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Servicio } from './Servicio';

@Entity()
export class Contrato{

    @PrimaryGeneratedColumn('increment')
    Id: number;
    
    @ManyToOne(type => Servicio) @JoinColumn()
    IdServicio: Servicio;
    
    @ManyToOne(type => Cliente) @JoinColumn()
    IdCliente: Cliente;

    @Column()
    FechaContratado: Date;

    @Column()
    Estado : boolean;

    
}