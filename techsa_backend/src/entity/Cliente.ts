import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Cliente{
    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column()
    Nombre: String;

    @Column()
    Apellido: String;

    @Column()
    Residencia: String;

    @Column()
    Correo: String;

    @Column()
    NombreUsuario: String;

    @Column()
    Contrasenia: String;
}