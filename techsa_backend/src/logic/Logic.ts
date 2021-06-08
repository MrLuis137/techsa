import {NextFunction, query, Request, Response, Router} from 'express';
import * as connect from '../connections/Connection';
import {getConnectionManager, Repository} from "typeorm";
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
router.put('/dispositivo/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("update dispositivo");
    console.log(req.body)
    try{
    const repository = await connect.getDispositivoRepository();
    let dispositivosUpdate = await repository.findOne(req.params.id);

    dispositivosUpdate.Modelo = req.body.Modelo;
    dispositivosUpdate.Marca = req.body.Marca;
    dispositivosUpdate.Color = req.body.Color;
    dispositivosUpdate.Camara = req.body.Camara;
    dispositivosUpdate.Ram = req.body.Ram;
    dispositivosUpdate.Almacenamiento = req.body.Almacenamiento;
    dispositivosUpdate.Precio = req.body.Precio;
    dispositivosUpdate.Cantidad = req.body.Cantidad;
    dispositivosUpdate.Imagen = req.body.Imagen;
    await repository.save(dispositivosUpdate);
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

///////////////////////////  Carrito  //////////////////////////////////////
router.get('/carrito/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getCarritoRepository();
        const carrito = await repository.findOne({where:[ {IdCliente: req.params.id} ] });
        res.send(carrito);
    }
    catch(err){
            return next(err);
    }
});

router.get('/carrito/', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getCarritoRepository();
        const carrito = await repository.find();
        res.send(carrito);
    }
    catch(err){
            return next(err);
    }
});


router.get('/carrito/servicios/', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getServicioXCarritoRepository();
        const servivcios = await repository.find();
        
        if(servivcios){
            res.send("Holi")
            return      
        }
        //res.send(servivcios);
        res.send({h:"Holi"})
    }
    catch(err){
            return next(err);
    }
});


router.get('/carrito/servicios/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getServicioXCarritoRepository();
        const servicesRepository = await connect.getServicioRepository();
        let query = 'SELECT servicio.Nombre, idServicioId as IdServicio FROM cliente '
        query += 'INNER JOIN carrito_compras ON carrito_compras.idClienteId = cliente.Id ' 
        query += 'INNER JOIN servicio_x_carrito on servicio_x_carrito.idCarritoIdCarrito = carrito_compras.IdCarrito '
        query += 'INNER JOIN servicio servicio ON servicio.Id = servicio_x_carrito.idServicioId '
        query += `WHERE cliente.Id = ${req.params.idcliente}`
        //console.log(servicioXCarrito)
        const servicioXCarrito = await repository.query(query)
        res.send(servicioXCarrito);
    }
    catch(err){
            return next(err);
    }
});

router.get('/carrito/dispositivos/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getDispositivoXCarritoRepository();
        let query = 'SELECT dispositivo.Id, dispositivo.marca, dispositivo.Almacenamiento, dispositivo.Camara, dispositivo.Color, dispositivo.Modelo, dispositivo.Precio, dispositivo.Ram FROM cliente '
        query += 'INNER JOIN carrito_compras ON carrito_compras.idClienteId = cliente.Id '
        query += 'INNER JOIN dispositivo_x_carrito on dispositivo_x_carrito.idCarritoIdCarrito = carrito_compras.IdCarrito '
        query += 'INNER JOIN dispositivo ON dispositivo.Id = dispositivo_x_carrito.idDispositivoId '
        query += `WHERE cliente.Id = ${req.params.idcliente}`
        const devices = await repository.query(query)
        
        
        res.send(devices);
    }
    catch(err){
            return next(err);
    }
});

router.put('/carrito/dispositivos/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const carritoRepository = await connect.getCarritoRepository();
        const servicesXCarrito = await connect.getServicioXCarritoRepository();
        const carrito = await carritoRepository.findOne({where:{IdCliente : req.params.idcliente}})
        const res = await servicesXCarrito.query(`INSERT INTO dispositivo_x_carrito(idCarritoIdCarrito, idDispositivoId) VALUES (${carrito.IdCarrito} , ${req.body.dispositivo});`)
        console.log(res)
        return res
    }
    catch(err){
            return next(err);
    }
});

router.put('/carrito/servicios/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const carritoRepository = await connect.getCarritoRepository();
        const servicesXCarrito = await connect.getServicioXCarritoRepository();
        const carrito = await carritoRepository.findOne({where:{IdCliente : req.params.idcliente}})
        const res = await servicesXCarrito.query(`INSERT INTO servicio_x_carrito ( idCarritoIdCarrito, idServicioId) VALUES (${carrito.IdCarrito} , ${req.body.servicio});`)
        console.log(res)
        return res
    }
    catch(err){
            return next(err);
    }
});
