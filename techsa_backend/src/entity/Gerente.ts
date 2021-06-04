import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Gerente{
    @PrimaryGeneratedColumn()
    Id:number;
    
    @Column()
    Id_laboral: number;

    @Column()
    Nombre: string;

    @Column()
    Usuario: string;

    @Column()
    Cedula: number;

    @Column()
    FechaNacimiento: Date;

    @Column()
    Puesto: String

    @Column()
    Contrasenia: String

}