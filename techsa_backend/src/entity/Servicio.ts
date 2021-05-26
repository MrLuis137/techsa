import{PrimaryGeneratedColumn, Column, Entity} from 'typeorm'

export class Servicio{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    nombre: String;
}