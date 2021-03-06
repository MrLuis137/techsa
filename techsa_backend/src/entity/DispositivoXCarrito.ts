import { Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Dispositivo } from './Dispositivo';
import { CarritoCompras } from './CarritoCompras';


@Entity()
export class DispositivoXCarrito{
    @PrimaryGeneratedColumn("increment")
    ID:number
    @ManyToOne(type => CarritoCompras)
    IdCarrito: CarritoCompras;
    @ManyToOne(type => Dispositivo)
    IdDispositivo:Dispositivo
}