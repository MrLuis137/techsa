import {NextFunction, Request, Response, Router} from 'express';
import * as connect from '../connections/Connection';
import {getConnectionManager} from "typeorm";
import { AgenteVentas } from '../entity/AgenteVentas';


export const router: Router = Router();


///////////////////////////  Agente Ventas  //////////////////////////////////////
//Falta modificar
//GET Agentes de Ventas
router.get('/agenteventas', async function(req: Request, res:Response, next:NextFunction){
    console.log("get AgenteSSS de Ventas");
    try{
        const repository = await connect.getAgenteVentasRepository();
        const todosAgentes = await repository.find();
        res.send(todosAgentes);
    }
    catch(err){
        return next(err);
    }
});

//GET Agente Ventas
router.get('/agenteventas/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("get Agente de ventas");
    try{
        const repository = await connect.getAgenteVentasRepository();
        const todosAgentes = await repository.findOne(req.params.id);
        res.send(todosAgentes);
    }
    catch(err){
        return next(err);
    }
});

//CREATE Agente Ventas
router.post('/agenteventas',async function (req:Request, res:Response, next:NextFunction){
    console.log("create Agente de Ventas");
    try{
        const repository = await connect.getAgenteVentasRepository();
        const newAgenteVentas = new AgenteVentas();
        console.log(req.body)
        newAgenteVentas.Nombre = req.body.Nombre;
        newAgenteVentas.Cedula = req.body.Cedula;
        newAgenteVentas.FechaNacimiento = req.body.FechaNacimiento;
        newAgenteVentas.Puesto = req.body.Puesto;
        newAgenteVentas.Usuario = req.body.Usuario;
        newAgenteVentas.Id_laboral = req.body.Id_laboral;
        newAgenteVentas.Contrasenia = req.body.Contrasenia;
        
        const resultado = await repository.save(newAgenteVentas);
        res.send(resultado);
    }
    catch(err){
        return next(err);
    }
});

//*DELETE Agente Ventas
router.delete('/agenteventas/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("delete Agentes de Ventas");
    try{
        const repository = await connect.getAgenteVentasRepository();
        await repository.delete(req.params.id)
        res.send('OK');
    }
    catch(err){
        return next(err);
    }
});

///////////////////////////  Plan Móvil  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planmovil', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getPlanMovilRepository();
        const todosPlanMovil = await repository.find();
        res.send(todosPlanMovil);
    }
    catch(err){
        return next(err);
    }
});

///////////////////////////  Servicio  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/servicio', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getServicioRepository();
        const todosServicios = await repository.find();
        res.send(todosServicios);
    }
    catch(err){
            return next(err);
    }
});