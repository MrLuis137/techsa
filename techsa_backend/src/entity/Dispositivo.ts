import{Entity, PrimaryGeneratedColumn, Column, Double} from "typeorm";

@Entity()
export class Dispositivo{

    @PrimaryGeneratedColumn('increment')
    Id: number;
    
    @Column()
    Modelo: String;
    
    @Column()
    Marca: String;

    @Column()
    Color: String;

    @Column()
    Camara: number;

    @Column()
    Ram: number;

    @Column()
    Almacenamiento : number;

    @Column()
    Precio: number;
    
    @Column()
    Cantidad: number;

    @Column({type: "blob"})
    Imagen: Buffer;



}