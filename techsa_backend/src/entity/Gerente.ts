import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Gerente{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    id_laboral: number;

    @Column()
    nombre: string;

    @Column()
    usuario: string;

    @Column()
    cedula: number;

    @Column()
    fechaNacimiento: Date;

    @Column()
    puesto: String

    @Column()
    contrasenia: String

}