import { Contrato } from './Contrato';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany,JoinColumn, createConnection, Connection, Repository} from 'typeorm';

@Entity()
export class Servicio{

    @PrimaryGeneratedColumn('increment')
    Id:number;

    @Column()
    Nombre: String;

}

let connection:Connection;

export async function getServicioRepository(): Promise<Repository<Servicio>>{
    if(connection == undefined){
        connection = await createConnection({
            type:'mysql',
            database:'techsa',
            username:'techsa',
            password:'techsa',
            synchronize:true,
            entities: [
                Servicio
            ],
        });
    }
    return connection.getRepository(Servicio);
}