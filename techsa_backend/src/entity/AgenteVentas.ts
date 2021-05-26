import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class AgenteVentas{
    @PrimaryGeneratedColumn()
    id_laboral:number;
    
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