import{Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Contrato{

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    idServicio: number;
    
    @Column()
    usuarioId: number;

    @Column()
    FechaContratado: Date;

    @Column()
    Estado : boolean;



}