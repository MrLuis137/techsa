import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Connection, Repository, createConnection } from 'typeorm';
import { Servicio } from './Servicio';

@Entity()
export class PlanMovil{
    @PrimaryGeneratedColumn('increment')
    ID: number;

    @ManyToOne(type => Servicio)
    IdServicio:Servicio

    @Column()
    TipoPlan: String;

    @Column()
    NombrePlan: String;

    @Column()
    Descripcion: String;

    @Column()
    PrecioMensual:Number;

    @Column()
    PecioLlamadas: number;

}

let connection:Connection;

export async function getPlanMovilRepository(): Promise<Repository<PlanMovil>>{
    if (connection = undefined) {
        connection = await createConnection({
            type: 'mysql',
            database:'techsa',
            synchronize:true,
            entities:[
                PlanMovil
            ],
        })
    }

    return connection.getRepository(PlanMovil)
}