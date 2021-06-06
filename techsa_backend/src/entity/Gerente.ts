import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Gerente{
    
    @PrimaryGeneratedColumn()
    Id_laboral: number;

    @Column()
    Nombre: string;

    @Column()
    Cedula: number;

    @Column()
    FechaNacimiento: Date;

    @Column()
    Puesto: String

    @Column()
    Contrasenia: String

}