import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class user{
    @PrimaryGeneratedColumn()
    cedula:number;

    
    @Column()
    nombre: string;

    @Column()
    usuario: string;
}