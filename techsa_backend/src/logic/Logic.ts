import {NextFunction, Request, Response, Router} from 'express';
import * as connect from '../connections/Connection';
import {getConnectionManager, Repository, getManager} from "typeorm";
import { AgenteVentas } from '../entity/AgenteVentas';
import { Gerente } from '../entity/Gerente';
import { Dispositivo } from '../entity/Dispositivo';
import { CarritoCompras } from '../entity/CarritoCompras';
import { DispositivoXCarrito } from '../entity/DispositivoXCarrito';
import { ServicioXCarrito } from '../entity/ServicioXCarrito';
import { Servicio } from '../entity/Servicio';

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
        newAgenteVentas.Id_laboral = req.body.Id_laboral;
        newAgenteVentas.Contrasenia = req.body.Contrasenia;
        
        const resultado = await repository.save(newAgenteVentas);
        res.send(resultado);
    }
    catch(err){
        return next(err);
    }
});

//*UPDATE Agente de ventas

router.put('/agenteventas/:id', async function (req, res, next:NextFunction) {
    try{
        console.log("update Agente de ventas")
        console.log(req.body)

        const repository = await connect.getAgenteVentasRepository();
        let AgenteVentasUpdate = await repository.findOne(req.params.id);

        AgenteVentasUpdate.Nombre = req.body.Nombre;
        AgenteVentasUpdate.Cedula = req.body.Cedula;
        AgenteVentasUpdate.FechaNacimiento = req.body.FechaNacimiento;
        AgenteVentasUpdate.Puesto = req.body.Puesto;
        AgenteVentasUpdate.Contrasenia = req.body.Contrasenia;
        await repository.save(AgenteVentasUpdate);
        res.send('OK');

    } 
    catch(err){
        console.log(err)
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
///////////////////////////  Gerente  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
//GET Gerentes
router.get('/gerente', async function(req: Request, res:Response, next:NextFunction){
    console.log("get gerentes");
    try{
        const repository = await connect.getGerenteRepository();
        const todosGerente = await repository.find();
        res.send(todosGerente);
    }
    catch(err){
        return next(err);
    }
});

//GET Gerente
router.get('/gerente/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("get Gerente por id");
    try{
        const repository = await connect.getGerenteRepository();
        const gerente = await repository.findOne(req.params.id);
        console.log(gerente)
        res.send(gerente);
    }
    catch(err){
        return next(err);
    }
});

//CREATE Gerente
router.post('/gerente',async function (req:Request, res:Response, next:NextFunction){
    console.log("create Gerente");
    try{
        const repository = await connect.getGerenteRepository();
        const newGerente = new Gerente();
        console.log(req.body)
        newGerente.Nombre = req.body.Nombre;
        newGerente.Cedula = req.body.Cedula;
        newGerente.FechaNacimiento = req.body.FechaNacimiento;
        newGerente.Puesto = req.body.Puesto;
        newGerente.Id_laboral = req.body.Id_laboral;
        newGerente.Contrasenia = req.body.Contrasenia;
        
        const resultado = await repository.save(newGerente);
        res.send(resultado);
    }
    catch(err){
        return next(err);
    }
});

//*UPDATE Gerente

router.put('/gerente/:id', async function (req, res, next:NextFunction) {
    try{
        console.log("update Gerente")
        console.log(req.body)

        const repository = await connect.getGerenteRepository();
        let gerenteUpdate = await repository.findOne(req.params.id);

        gerenteUpdate.Nombre = req.body.Nombre;
        gerenteUpdate.Cedula = req.body.Cedula;
        gerenteUpdate.FechaNacimiento = req.body.FechaNacimiento;
        gerenteUpdate.Puesto = req.body.Puesto;
        gerenteUpdate.Contrasenia = req.body.Contrasenia;
        await repository.save(gerenteUpdate);
        res.send('OK');

    } 
    catch(err){
        console.log(err)
    }
}); 

//*DELETE Gerente
router.delete('/gerente/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("delete Gerente");
    try{
        const repository = await connect.getGerenteRepository();
        await repository.delete(req.params.id)
        res.send('OK');
    }
    catch(err){
        return next(err);
    }
});

///////////////////////////  Dispositivo  //////////////////////////////////////
//Falta modificar
//GET Dispositivo
router.get('/dispositivo', async function(req: Request, res:Response, next:NextFunction){
    console.log("get dispositivo");
    try{
        const repository = await connect.getDispositivoRepository();
        const todosDispositivos = await repository.find();
        res.send(todosDispositivos);
    }
    catch(err){
        return next(err);
    }
});

//GET dispositivo
router.get('/dispositivo/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("get dispositivo");
    try{
        const repository = await connect.getDispositivoRepository();
        const dispositivo = await repository.findOne(req.params.id);
        res.send(dispositivo);
    }
    catch(err){
        return next(err);
    }
});

//CREATE dispositivo
router.post('/dispositivo',async function (req:Request, res:Response, next:NextFunction){
    console.log("create dispositivo");
    try{
        const repository = await connect.getDispositivoRepository();
        const newDispositivo = new Dispositivo();
        console.log(req.body)
        newDispositivo.Modelo = req.body.Modelo;
        newDispositivo.Marca = req.body.Marca;
        newDispositivo.Ram = req.body.Ram;
        newDispositivo.Almacenamiento = req.body.Almacenamiento;
        newDispositivo.Precio = req.body.Precio;
        newDispositivo.Cantidad = req.body.Cantidad;
        newDispositivo.Imagen = req.body.Imagen;
        newDispositivo.Camara = req.body.Camara;
        newDispositivo.Color = req.body.Camara;
        const resultado = await repository.save(newDispositivo);
        res.send(resultado);
    }
    catch(err){
        return next(err);
    }
});

//*DELETE dispositivo
router.delete('/dispositivo/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("delete dispositivo");
    try{
        const repository = await connect.getDispositivoRepository();
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


///////////////////////////  Plan Móvil Dispositivo //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planmovildispositivo', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getPlanMovilDispositivoRepository();
        const todosPlanMovilDispositivo = await repository.find();
        // //const todosPlanMovilDispositivo2 = await getManager().query(`
        // SELECT dispositivo.Id,dispositivo.Modelo, plan_movil.NombrePlan
        // FROM dispositivo
        // LEFT OUTER JOIN plan_movil_dispositivo
        //     ON dispositivo.Id = plan_movil_dispositivo.idDispositivoId
        //     AND plan_movil_dispositivo.idServicioIdId = 1203
        // LEFT OUTER JOIN plan_movil
        //     ON plan_movil_dispositivo.idPlanID = plan_movil.ID;
        //         `);
        res.send(todosPlanMovilDispositivo);
    }
    catch(err){
        return next(err);
    }
});

///////////////////////////  Plan Fijo  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planfijo', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getPlanFijoRepository();
        const todosPlanFijo = await repository.find();
        res.send(todosPlanFijo);
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


///////////////////////////  Plan Internet  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planinternet', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getPlanInternetRepository();
        const todosInternet = await repository.find();
        res.send(todosInternet);
    }
    catch(err){
            return next(err);
    }
});

///////////////////////////  Plan Internet Plan fijo  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planinternetfijo', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getPlanInternetPlanFijoRepository();
        const todosInternetFijo = await repository.find();
        res.send(todosInternetFijo);
    }
    catch(err){
            return next(err);
    }
});

///////////////////////////  Plan Internet Plan Movil Plan Fijo  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planinternetfijomovil', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getPlanInternetPlanMovilPlanFijoRepository();
        const todosInternetfijoMovil = await repository.find();
        res.send(todosInternetfijoMovil);
    }
    catch(err){
            return next(err);
    }
});


///////////////////////////  Carrito  //////////////////////////////////////
router.get('/carrito/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getCarritoRepository();
        const todosServicios = await repository.findOne({where:[ {IdCliente: req.params.id} ] });
        res.send(todosServicios);
    }
    catch(err){
            return next(err);
    }
});


router.get('/carrito/servicios/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getDispositivoXCarritoRepository();
        const servicesRepository = await connect.getServicioRepository();
        const servicioXCarrito = await repository.find({where:[ {IdCarrito: req.params.id} ] });
        let servicios:Servicio[];
        for (let i; i< servicioXCarrito.length; i+=1){
            const servicioId = servicioXCarrito[i].IdDispositivo
            const service = servicesRepository.findOne(servicioId);
            servicios.push(service[0])
        }
        res.send(servicios);
    }
    catch(err){
            return next(err);
    }
});

router.get('/carritodispositivos/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getDispositivoXCarritoRepository();
        const deviceRepository = await connect.getDispositivoRepository();
        const dispositivoXCarrito = await repository.find({where:[ {IdCarrito: req.params.id} ] });
        let devices:Dispositivo[];
        for (let i; i< dispositivoXCarrito.length; i+=1){
            const servicioId = dispositivoXCarrito[i].IdDispositivo
            const device = deviceRepository.findOne(servicioId);
            devices.push(device[0])
        }
        res.send(devices);
    }
    catch(err){
            return next(err);
    }
});