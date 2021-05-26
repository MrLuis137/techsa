import{PrimaryGeneratedColumn, Entity, Column} from 'typeorm'

@Entity()
export class Cliente{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: String;

    @Column()
    apellido: String;

    @Column()
    residencia: String;

    @Column()
    correo: String;

    @Column()
    nombreUsuario: String;

    @Column()

    contrasenia: String;
}