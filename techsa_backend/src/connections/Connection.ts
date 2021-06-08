import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, createConnection, Connection, Repository} from 'typeorm';
import { PlanMovil } from '../entity/PlanMovil';
import { Servicio } from '../entity/Servicio';
import { AgenteVentas } from '../entity/AgenteVentas';
import { Gerente } from '../entity/Gerente';

import { Cliente } from '../entity/Cliente';
import { Contrato } from '../entity/Contrato';
import { PlanFijo } from '../entity/PlanFijo';
import { PlanInternet } from '../entity/PlanInternet';
import { PlanInternetPlanFijo } from '../entity/PlanInternetPlanFijo';
import { PlanInternetPlanMovilPlanFijo } from '../entity/PlanIntertnetPlanMovilPlanFijo';
import { PlanMovilDispositivo } from '../entity/PlanMovilDispositivo';
import { Dispositivo } from '../entity/Dispositivo';
import { CarritoCompras } from '../entity/CarritoCompras';
import { ServicioXCarrito } from '../entity/ServicioXCarrito';
import { DispositivoXCarrito } from '../entity/DispositivoXCarrito';


//Acá en teoría es donde se realizan las peticiones a la base de datos 

//Crea el "objeto" para conectarse a la tabla 
let connection:Connection;

//Función que abre la conección a la base de datos 
export async function connect(){
    connection = await createConnection({
        type:'mysql',           
        database:'techsa',
        username:'techsa',
        password:'techsa',
        synchronize:true,
        entities: [
            PlanMovil,Servicio, AgenteVentas, Gerente, Cliente, 
            Contrato, PlanFijo,PlanInternet, PlanInternetPlanFijo,
            PlanInternetPlanMovilPlanFijo, PlanMovilDispositivo,Dispositivo,CarritoCompras,ServicioXCarrito, DispositivoXCarrito
        ],
    });
}

///////////////////////////  Gerente //////////////////////////////////////
//Falta modificar
export async function getGerenteRepository(): Promise<Repository<Gerente>>{
    console.log("getGerenteRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(Gerente);  //Retorna el repositorio
}

///////////////////////////  Agente de Ventas /////////////////////////////
//Falta agregar, modificar, eliminar y get:id
export async function getAgenteVentasRepository(): Promise<Repository<AgenteVentas>>{
    console.log("getAgenteVentasRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(AgenteVentas);  //Retorna el repositorio
}

///////////////////////////  Dispositivos //////////////////////////////////////
//Falta modificar
export async function getDispositivoRepository(): Promise<Repository<Dispositivo>>{
    console.log("getDispositivosRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(Dispositivo);  //Retorna el repositorio
}

///////////////////////////  Plan Movil  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
export async function getPlanMovilRepository(): Promise<Repository<PlanMovil>>{
    console.log("getPlanMovilRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(PlanMovil);   //Retorna el repositorio
}

///////////////////////////  Servicio  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
export async function getServicioRepository(): Promise<Repository<Servicio>>{
    console.log("getServicioRepository")
    if(connection == undefined){
        await connect();
    }
    return connection.getRepository(Servicio);
}

export async function getCarritoRepository(): Promise<Repository<CarritoCompras>>{
    console.log("getCarritoRepository")
    if(connection == undefined){
        await connect();
    }
    return connection.getRepository(CarritoCompras);
}

export async function getDispositivoXCarritoRepository(): Promise<Repository<DispositivoXCarrito>>{
    console.log("getDispositivoXCarritoRepository")
    if(connection == undefined){
        await connect();
    }
    return connection.getRepository(DispositivoXCarrito);
}

export async function getServicioXCarritoRepository(): Promise<Repository<ServicioXCarrito>>{
    console.log("getServicioXCarritoRepository")
    if(connection == undefined){
        await connect();
    }
    return connection.getRepository(ServicioXCarrito);
}