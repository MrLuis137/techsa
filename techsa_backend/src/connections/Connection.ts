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
        port:3306,
        entities: [
            PlanMovil,Servicio, AgenteVentas, Gerente, Cliente, 
            Contrato, PlanFijo,PlanInternet, PlanInternetPlanFijo,
            PlanInternetPlanMovilPlanFijo, PlanMovilDispositivo,Dispositivo,CarritoCompras,ServicioXCarrito, DispositivoXCarrito
        ],
    });
}

///////////////////////////  Cliente //////////////////////////////////////
//Falta modificar
export async function getClienteRepository(): Promise<Repository<Cliente>>{
    console.log("getClienteRepository");
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(Cliente);  //Retorna el repositorio
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

///////////////////////////  Plan Fijo //////////////////////////////////////
//Falta modificar
export async function getPlanFijoRepository(): Promise<Repository<PlanFijo>>{
    console.log("getPlanFijoRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(PlanFijo);  //Retorna el repositorio
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

///////////////////////////  Plan Movil Dispositivo //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
export async function getPlanMovilDispositivoRepository(): Promise<Repository<PlanMovilDispositivo>>{
    console.log("getPlanMovilDispositivoRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(PlanMovilDispositivo);   //Retorna el repositorio
}

///////////////////////////  Plan Internet  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
export async function getPlanInternetRepository(): Promise<Repository<PlanInternet>>{
    console.log("getPlanInternetRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(PlanInternet);   //Retorna el repositorio
}

///////////////////////////  Plan Internet Plan Movil  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
export async function getPlanInternetPlanFijoRepository(): Promise<Repository<PlanInternetPlanFijo>>{
    console.log("getPlanInternetPlanFijoRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(PlanInternetPlanFijo);   //Retorna el repositorio
}

///////////////////////////  Plan Internet Plan Movil Plan Fijo //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
export async function getPlanInternetPlanMovilPlanFijoRepository(): Promise<Repository<PlanInternetPlanMovilPlanFijo>>{
    console.log("getPlanInternetPlanMovilPlanFijoRepository")
    if(connection == undefined){  //Si la coneccion es indefinida, llama a la función de arriba para conectarse
        await connect();
    }
    return connection.getRepository(PlanInternetPlanMovilPlanFijo);   //Retorna el repositorio
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