import {NextFunction, query, Request, Response, Router} from 'express';
import * as connect from '../connections/Connection';
import {getConnectionManager, Repository, getManager} from "typeorm";
import { AgenteVentas } from '../entity/AgenteVentas';
import { Gerente } from '../entity/Gerente';
import { Dispositivo } from '../entity/Dispositivo';
import { CarritoCompras } from '../entity/CarritoCompras';
import { DispositivoXCarrito } from '../entity/DispositivoXCarrito';
import { ServicioXCarrito } from '../entity/ServicioXCarrito';
import { Servicio } from '../entity/Servicio';
import { PlanMovil } from '../entity/PlanMovil';
import { PlanInternet } from '../entity/PlanInternet';
import {PlanFijo} from '../entity/PlanFijo';

 

export const router: Router = Router();

///////////////////////////  Cliente  ////////////////////////////////////////////
router.post("/cliente" , async function (req: Request, res: Response) {
    const clienteRepository = await connect.getClienteRepository();
    const user = await clienteRepository.create(req.body);
    const results = await clienteRepository.save(user);
    return res.send(results);
    
} )

//Ver todos los usuarios
router.get("/cliente", async function(req: Request, res: Response) {
    const clienteRepository = await connect.getClienteRepository();
    const results = await clienteRepository.find();
    return res.send(results);
});

//Usuario por id
router.get("/cliente/:id", async function(req: Request, res: Response) {
    const clienteRepository = await connect.getClienteRepository();
    const cliente = await clienteRepository.findOne(req.params.id);
    return res.send(cliente);
});

//Actualizar usuario por id
router.put("/cliente/:id", async function(req: Request, res: Response) {
    const clienteRepository = await connect.getClienteRepository();
    const user = await clienteRepository.findOne(req.params.id);
    clienteRepository.merge(user, req.body)
    const results = await clienteRepository.save(user)
    return res.send(results);
});

//Delete user by id
router.delete("/cliente/:id", async function(req: Request, res: Response) {
    const clienteRepository = await connect.getClienteRepository();
    const results = await clienteRepository.delete(req.params.id);
    return res.send(results);
});


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
//GET todos los plan moviles
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

//GET Plan Movil por id
router.get('/planmovil/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("get planmovil");
    try{
        const repository = await connect.getPlanMovilRepository();
        const planmovil = await repository.findOne(req.params.id);
        res.send(planmovil);
    }
    catch(err){
        return next(err);
    }
});

//GET todos los planes moviles del id de idservicioid 
router.get('/planmovilTipoPlan/:TipoPlan',async function (req:Request, res:Response, next:NextFunction){
    console.log("get planmovil id servicio");
    try{
        const repository = await connect.getPlanMovilRepository();
        //const planmovil = await repository.findOne(req.params.id);
        const planmovil = await repository.find({
            where:[
                {TipoPlan:req.params.TipoPlan}  //donde el id de servicio es el id que se le pasa
            ]
        })
        res.send(planmovil);
    }
    catch(err){
        return next(err);
    }
});

//*UPDATE mobilephone
router.put('/planmovil/:id', async function (req, res, next:NextFunction) {
    try{
        console.log("update plan mobilephone")
        console.log(req.body)
        const repository = await connect.getPlanMovilRepository();
        let planUpdate = await repository.findOne(req.params.id);
        planUpdate.NombrePlan = req.body.NombrePlan;
        planUpdate.Descripcion = req.body.Descripcion;
        planUpdate.PrecioMensual = req.body.PrecioMensual;
        planUpdate.Minutos = req.body.Minutos;
        planUpdate.GBInternet = req.body.GBInternet;
        planUpdate.CostoLlamada = req.body.CostoLlamada;
        planUpdate.TipoPlan = req.body.TipoPlan;
        await repository.save(planUpdate);
        res.send('OK');
    } 
    catch(err){
        console.log(err)
    }
}); 
//*DELETE mobilephone
router.delete('/planmovil/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("delete plan mobilephone");
    try{
        const repository = await connect.getPlanMovilRepository();
        await repository.delete(req.params.id)
        res.send('OK');
    }
    catch(err){
        return next(err);
    }
});

//CREATE mobilephone
router.post('/planmovil',async function (req:Request, res:Response, next:NextFunction){
    console.log("create plan mobilephone");
    try{
        const repositorioServicio = await connect.getServicioRepository();
        const servicio = new Servicio();
        servicio.Nombre= req.body.NombrePlan;
        repositorioServicio.save(servicio);
        console.log(servicio)
        const repository = await connect.getPlanMovilRepository();
        const plan = new PlanMovil();
        console.log(req.body)
        plan.idServicio = servicio;
        plan.NombrePlan = req.body.NombrePlan;
        plan.Descripcion = req.body.Descripcion;
        plan.PrecioMensual = req.body.PrecioMensual;
        plan.Minutos = req.body.Minutos;
        plan.GBInternet = req.body.GBInternet;
        plan.CostoLlamada = req.body.CostoLlamada;
        plan.TipoPlan = req.body.TipoPlan;
        const resultado = await repository.save(plan);
        res.send(resultado);;
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
        //const todosPlanMovilDispositivo = await repository.find();
        const todosPlanMovilDispositivo2 = await getManager().query(
            `SELECT * FROM plan_movil_dispositivo;`);
        res.send(todosPlanMovilDispositivo2);
    }
    catch(err){
        return next(err);
    }
});

///////////////////////////  Plan Fijo  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planfijo', async function(req: Request, res:Response, next:NextFunction){
    try{
        const todosPlanFijo = await getManager().query(
            `SELECT * FROM plan_fijo;`);
        res.send(todosPlanFijo);
    }
    catch(err){
        return next(err);
    }
});

router.get('/planfijo/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("get plan fijo por id ");
    try{
        const todosInternetFijo = await getManager().query(
            "SELECT * FROM plan_fijo where plan_fijo.ID = ?;",[req.params.id]);
        res.send(todosInternetFijo);
    }
    catch(err){
        return next(err);
    }
});

//CREATE landline
router.post('/planfijo',async function (req:Request, res:Response, next:NextFunction){
    console.log("create plan landline");
    try{
        const repositorioServicio = await connect.getServicioRepository();
        const servicio = new Servicio();
        servicio.Nombre= req.body.NombrePlan;
        repositorioServicio.save(servicio);
        console.log(servicio)
        const repository = await connect.getPlanFijoRepository();
        const plan = new PlanFijo();
        console.log(req.body)
        plan.IdServicio= servicio;
        plan.NombrePlan = req.body.NombrePlan;
        plan.PrecioMensual = req.body.PrecioMensual;
        plan.Minutos = req.body.Minutos;
        plan.FijoTechsa = req.body.FijoTechsa;
        plan.FijoOperador = req.body.FijoOperador;
        plan.MovilCualquiera = req.body.MovilCualquiera;
        const resultado = await repository.save(plan);
        res.send(resultado);
    }
    catch(err){
        return next(err);
    }
});
//*UPDATE landline
router.put('/planfijo/:id', async function (req, res, next:NextFunction) {
    try{
        console.log("update plan landline")
        console.log(req.body)
        const repository = await connect.getPlanFijoRepository();
        let planUpdate = await repository.findOne(req.params.id);
        planUpdate.NombrePlan = req.body.NombrePlan;
        planUpdate.PrecioMensual = req.body.PrecioMensual;
        planUpdate.Minutos = req.body.Minutos;
        planUpdate.FijoTechsa = req.body.FijoTechsa;
        planUpdate.FijoOperador = req.body.FijoOperador;
        planUpdate.MovilCualquiera = req.body.MovilCualquiera;
        await repository.save(planUpdate);
        res.send('OK');
    } 
    catch(err){
        console.log(err)
    }
}); 
//*DELETE landline
router.delete('/planfijo/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("delete plan landline");
    try{
        // const repository = await connect.getPlanFijoRepository();
        // const repositorioServicio = await connect.getServicioRepository();
        // let planDelete = await repository.findOne(req.params.id);
        // let servicio = await repositorioServicio.findOne(planDelete.IdServicio);
        // console.log(servicio.Id);

        // await repository.delete(planDelete);

        const planfijo = await getManager().query(
            "SELECT * FROM plan_fijo where plan_fijo.ID = ?;",[req.params.id]);
        
        const planfijoDelete = await getManager().query(
            "DELETE FROM plan_fijo WHERE plan_fijo.ID = ?;",[req.params.id]);
            
        const servicio = await getManager().query(
            "DELETE FROM servicio where servicio.Id = ?;",[planfijo[0].idServicioId]);
    
        // await repositorioServicio.delete(servicio.Id);
 
        res.send('OK');
    }
    catch(err){
        return next(err);
    }
});
////////////////

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
        //const repository = await connect.getPlanInternetRepository();
        const todosInternet2 = await getManager().query(
            `SELECT * FROM plan_internet;`);
        res.send(todosInternet2);
    }
    catch(err){
            return next(err);
    }
});

router.get('/planinternet/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("get plan internet por id ");
    try{
        const todosInternetFijo = await getManager().query(
            "SELECT * FROM plan_internet where plan_internet.ID = ?;",[req.params.id]);
        res.send(todosInternetFijo);
    }
    catch(err){
        return next(err);
    }
});

router.get('/servicio/planinternet/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("get plan internet por ServiceId ");
    try{
        const todosInternetFijo = await getManager().query(
            "SELECT * FROM plan_internet where plan_internet.idServicioId = ?;",[req.params.id]);
        res.send(todosInternetFijo);
    }
    catch(err){
        return next(err);
    }
});

//*UPDATE internet
router.put('/planinternet/:id', async function (req, res, next:NextFunction) {
    try{
        console.log("update plan internet")
        console.log(req.body)
        const repository = await connect.getPlanInternetRepository();
        let planUpdate = await repository.findOne(req.params.id);
        planUpdate.NombrePlan = req.body.NombrePlan;
        planUpdate.Velocidad = req.body.Velocidad;
        planUpdate.Descripcion = req.body.Descripcion;
        planUpdate.PrecioMensual = req.body.PrecioMensual;
        // planUpdate.Tipo = req.body.Tipo;
        await repository.save(planUpdate);
        res.send('OK');
    } 
    catch(err){
        console.log(err)
    }
}); 

//*DELETE techsa
router.delete('/planinternet/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("delete plan internet");
    try{
        const repository = await connect.getPlanInternetRepository();
        await repository.delete(req.params.id)
        res.send('OK');
    }
    catch(err){
        return next(err);
    }
});

//CREATE internet
router.post('/planinternet',async function (req:Request, res:Response, next:NextFunction){
    console.log("create plan internet");
    try{
        const repositorioServicio = await connect.getServicioRepository();
        const servicio = new Servicio();
        servicio.Nombre= req.body.NombrePlan;
        repositorioServicio.save(servicio);
        console.log(servicio)
        const repository = await connect.getPlanInternetRepository();
        const plan = new PlanInternet();
        console.log(req.body)
        plan.IdServicio= servicio;
        plan.NombrePlan = req.body.NombrePlan;
        plan.Velocidad = req.body.Velocidad;
        plan.Descripcion = req.body.Descripcion;
        plan.PrecioMensual = req.body.PrecioMensual;
        //plan.Tipo = req.body.Tipo;
        const resultado = await repository.save(plan);
        res.send(resultado);;
    }
    catch(err){
        return next(err);
    }
});

///////////////////////////  Plan Internet Plan fijo  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planinternetfijo', async function(req: Request, res:Response, next:NextFunction){
    try{
        //const repository = await connect.getPlanInternetPlanFijoRepository();
        const todosInternetFijo = await getManager().query(
            `SELECT * FROM plan_internet_plan_fijo;`);
        res.send(todosInternetFijo);
    }
    catch(err){
            return next(err);
    }
});


///////////////////////////  Plan Internet Plan Movil Plan Fijo  //////////////////////////////////////
//Falta agregar, modificar, eliminar y get:id
router.get('/planinternetfijomovil', async function(req: Request, res:Response, next:NextFunction){
    console.log("get plan internet fijo movil por id internet");
    try{
        const repository = await connect.getPlanInternetPlanMovilPlanFijoRepository();
        const todosInternetfijoMovil = await getManager().query(
            `SELECT * FROM plan_internet_plan_movil_plan_fijo;`);
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

///////////////////////////  Contrato y pago en linea /////////////////////////////////
router.put('/pagoEnLinea/plan_internet/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getContratoRepository();
        let query = 'SELECT c.Id,pi.NombrePlan,pi.Descripcion,pi.PrecioMensual FROM contrato c '
        query += 'INNER JOIN plan_internet pi ON pi.idServicioId = c.idServicioId '
        query += `WHERE c.idClienteId = ${req.params.idcliente} and c.estado=${req.body.Estado} and c.FechaContratado <= (Select NOW())`
        const services = await repository.query(query)
        console.log(services)
        
        res.send(services);
    }
    catch(err){
            return next(err);
    }
});
router.put('/pagoEnLinea/plan_fijo/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getContratoRepository();
        let query = 'SELECT c.Id,pf.NombrePlan,pf.Minutos,pf.FijoTechsa,pf.FijoOperador,pf.PrecioMensual FROM contrato c '
        query += 'INNER JOIN plan_fijo pf ON pf.idServicioId = c.idServicioId '
        query += `WHERE c.idClienteId = ${req.params.idcliente} and c.estado=${req.body.Estado} and c.FechaContratado <= (Select NOW())`
        const services = await repository.query(query)
        console.log(services)
        
        res.send(services);
    }
    catch(err){
            return next(err);
    }
});
router.put('/pagoEnLinea/plan_internet_plan_fijo/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getContratoRepository();
        let query = 'SELECT c.Id,pf.NombrePlan AS "nombreFijo" ,pi.NombrePlan AS "nombreInternet" ,pf.Minutos,pf.FijoTechsa,pf.FijoOperador,pipmpf.PrecioMensual,pi.Velocidad,pi.Descripcion FROM contrato c '
        query += 'INNER JOIN plan_internet_plan_fijo pipmpf ON pipmpf.idServicioId = c.idServicioId '
        query += 'INNER JOIN plan_fijo pf ON pipmpf.idPlanFijoID = pf.ID '
        query += 'INNER JOIN plan_internet pi ON pipmpf.idPlanInternetID = pi.ID '
        query += `WHERE c.idClienteId = ${req.params.idcliente} and c.estado=${req.body.Estado} and c.FechaContratado <= (Select NOW())`
        const services = await repository.query(query)
        console.log(services)
        
        res.send(services);
    }
    catch(err){
            return next(err);
    }
});
router.put('/pagoEnLinea/plan_internet_plan_movil_plan_fijo/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getContratoRepository();
        let query = 'SELECT c.Id, pf.Minutos, pf.FijoTechsa,pf.FijoOperador,pipmpf.PrecioMensual,pf.NombrePlan AS "nombreFijo",pi.Velocidad,pi.Descripcion,pm.NombrePlan FROM contrato c '
        query += 'INNER JOIN plan_internet_plan_movil_plan_fijo pipmpf ON pipmpf.idServicioId = c.idServicioId '
        query += 'INNER JOIN plan_fijo pf ON pipmpf.idPlanFijoID = pf.ID '
        query += 'INNER JOIN plan_internet pi ON pipmpf.idPlanInternetID = pi.ID '
        query += 'INNER JOIN plan_movil pm ON pipmpf.idPlanMovilID = pm.ID '
        query += `WHERE c.idClienteId = ${req.params.idcliente} and c.estado=${req.body.Estado} and c.FechaContratado <= (Select NOW())`
        const services = await repository.query(query)
        console.log(services)
        
        res.send(services);
    }
    catch(err){
            return next(err);
    }
});

router.put('/pagoEnLinea/plan_movil/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getContratoRepository();
        let query = 'SELECT c.Id,pm.Minutos,pm.PrecioMensual,pm.Descripcion,pm.NombrePlan,pm.CostoLlamada,pm.GBInternet  FROM contrato c '
        query += 'INNER JOIN plan_movil pm ON c.idServicioId = pm.idServicioId '
        query += `WHERE c.idClienteId = ${req.params.idcliente} and c.estado=${req.body.Estado} and c.FechaContratado <= (Select NOW())`
        const services = await repository.query(query)
        console.log(services)
        
        res.send(services);
    }
    catch(err){
            return next(err);
    }
});


router.put('/pagoEnLinea/plan_movil_dispositivo/:idcliente', async function(req: Request, res:Response, next:NextFunction){
    try{
        console.log(req.body)
        const repository = await connect.getContratoRepository();
        let query = 'SELECT c.Id,pm.Minutos,d.Modelo AS "dispositivo",pm.PrecioMensual,pm.Descripcion,pm.NombrePlan,pm.CostoLlamada,pm.GBInternet, d.Modelo,d.Marca FROM contrato c '
        query += 'INNER JOIN plan_movil_dispositivo pmd ON c.idServicioId = pmd.idServicioIdId '
        query += 'INNER JOIN plan_movil pm ON pmd.idPlanID = pm.ID '
        query += 'INNER JOIN dispositivo d  ON pmd.idDispositivoID = d.ID '
        query += `WHERE c.idClienteId = ${req.params.idcliente} and c.estado=${req.body.Estado} and c.FechaContratado <= (Select NOW())`
        const services = await repository.query(query)
        console.log(services)
        
        res.send(services);
    }
    catch(err){
            return next(err);
    }
});

router.put('/pagoEnLinea/pagar/:idContrato', async function(req: Request, res:Response, next:NextFunction){
    try{
        const contratoRepository = await connect.getContratoRepository();
        const res = await contratoRepository.query(`UPDATE contrato SET Estado=true,FechaContratado=(SELECT DATE(DATE_ADD(FechaContratado, INTERVAL 1 MONTH))) WHERE Id=${req.params.idContrato};`)
        console.log(res)
        return res
    }
    catch(err){
            return next(err);
    }
});
