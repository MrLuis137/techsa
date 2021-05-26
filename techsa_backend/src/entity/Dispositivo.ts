import{Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Dispositivo{

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    modelo: String;
    
    @Column()
    marca: String;

    @Column()
    ram: number;

    @Column()
    almacenamiento : number;

    @Column()
    precio: Float32Array;
    
    @Column()
    cantidad: number;

    @Column({type: "blob"})
    imagen: Buffer;



}