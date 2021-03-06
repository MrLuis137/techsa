import {NextFunction, query, Request, Response, Router} from 'express';
import * as connect from '../connections/Connection';
import jwt_decode from "jwt-decode";
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
import * as bcrypt from 'bcryptjs';


//import * as jwt from 'jsonwebtoken';
import { Cliente } from '../entity/Cliente';

 

export const router: Router = Router();
const nodemailer = require('nodemailer');
let transport =  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5dfdb473226cc2",
      pass: "367aff7b0ebf3f"
    }
  });

const jwt = require('jsonwebtoken');

///////////////////////////  AUTORIZACION  ////////////////////////////////////////////

router.post("/auth" , async function (req: Request, res: Response) {
    const body = req.body;

    const clienteRepository = await connect.getClienteRepository();
    const usuario = await clienteRepository.find({
        where:[
            {NombreUsuario:body.username }  //donde existe el usuario y la contraseña
        ]
    });

    const gerenteRepository = await connect.getGerenteRepository();
    const gerente = await gerenteRepository.find({
        where:[
            {Id_laboral:body.username }  //donde existe el usuario y la contraseña
        ]
    });

    const agenteVentasRepo = await connect.getAgenteVentasRepository();
    const agenteVentas = await agenteVentasRepo.find({
        where:[
            {Id_laboral:body.username }  //donde existe el usuario y la contraseña
        ]
    });

    if (usuario[0]) {
        if(bcrypt.compareSync(body.password,usuario[0].Contrasenia )){
            var tokenID = jwt.sign({userID:usuario[0].Id, role:"cliente"}, 'MENSAJESECRETO', {expiresIn:'24h'});
            return res.send({token:tokenID});
        }else{
            return res.send(401);
        }
    }if (gerente[0]) {
        if(bcrypt.compareSync(body.password,gerente[0].Contrasenia )){
            var tokenID = jwt.sign({userID:gerente[0].Id_laboral, role:"gerente"}, 'MENSAJESECRETO', {expiresIn:'24h'});
            return res.send({token:tokenID});
        }else{
            return res.send(401);
        }
    }if (agenteVentas[0]) {
        if(bcrypt.compareSync(body.password,agenteVentas[0].Contrasenia )){
            var tokenID = jwt.sign({userID:agenteVentas[0].Id_laboral, role:"agenteventas"}, 'MENSAJESECRETO', {expiresIn:'24h'});
            return res.send({token:tokenID});
        }else{
            return res.send(401);
        }
    }else{
        return res.send(401);
    }    
})

//Prueba para decodificar el token, si funciona.. 
router.get("/auth/id/:token", async function(req: Request, res: Response) {
    let token = req.params.token;
    let decoded = JSON.stringify(jwt_decode(token));
    var decodedJson = JSON.parse(decoded);
    console.log(decodedJson.userID);
    return res.send({userId:decodedJson.userID});
});

//Prueba para decodificar el token, si funciona.. 
router.get("/auth/role/:token", async function(req: Request, res: Response) {
    let token = req.params.token;
    let decoded = JSON.stringify(jwt_decode(token));
    var decodedJson = JSON.parse(decoded);
    return res.send({role:decodedJson.role});
});

///////////////////////////  Cliente  ////////////////////////////////////////////


//Crea el cliente y su correspondiente carrito de compras
router.post("/cliente" , async function (req: Request, res: Response) {

    const clienteRepository = await connect.getClienteRepository();
    const user = new Cliente();
    user.Nombre = req.body.Nombre
    user.Apellido = req.body.Apellido
    user.Correo = req.body.Correo
    user.NombreUsuario = req.body.NombreUsuario
    user.Residencia = req.body.Residencia
    user.Contrasenia = req.body.Contrasenia
    console.log(user)
    const results = await clienteRepository.save(user);
    const carritoRepository = await connect.getCarritoRepository();
    const carrito = new CarritoCompras();
    carrito.IdCliente = user;
    await carritoRepository.save(carrito);
    return res.send(results);
    
} );

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
    if(cliente){
        return res.send(cliente);
    }else{
        return res.send('No existe Cliente');
    }
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
        const todosPlanMovil = await getManager().query(
            "SELECT * FROM plan_movil");
        res.send(todosPlanMovil);
    }
    catch(err){
        return next(err);
    }
});

//GET Plan Movil por id
router.get('/planmovil/:id',async function (req:Request, res:Response, next:NextFunction){
    try{
        const planmovil = await getManager().query(
            "SELECT * FROM plan_movil where plan_movil.ID = ?;",[req.params.id]);
        console.log(planmovil);
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
        const planmovil = await getManager().query(
            "SELECT * FROM plan_movil where plan_movil.TipoPlan = ?;",[req.params.TipoPlan]);
        res.send(planmovil);
    }
    catch(err){
        return next(err);
    }
});

//*UPDATE mobilephone
router.put('/planmovil/:id', async function (req, res, next:NextFunction) {
    try{
        const planmovil = await getManager().query(
            "SELECT * FROM plan_movil where plan_movil.ID = ?;",[req.params.id]);
        const contrato = await getManager().query(
            "SELECT * FROM contrato where contrato.idServicioId = ?;",[planmovil[0].idServicioId]);
        if (contrato==false){
            console.log("si se puede modificar")
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
        }else{
            console.log("no se puede modificar")
        }
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
        const planmovil = await getManager().query(
            "SELECT * FROM plan_movil where plan_movil.ID = ?;",[req.params.id]);
        const contrato = await getManager().query(
            "SELECT * FROM contrato where contrato.idServicioId = ?;",[planmovil[0].idServicioId]);
        if (contrato==false){
            console.log("si se puede borrar")
            const planmovilDelete = await getManager().query(
                "DELETE FROM plan_movil WHERE plan_movil.ID = ?;",[req.params.id]);
            const servicio = await getManager().query(
                "DELETE FROM servicio where servicio.Id = ?;",[planmovil[0].idServicioId]);
        }else{
            console.log("no se puede borrar porque hya uno usando vacido")
        }
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
        console.log(servicio);
        const repository = await connect.getPlanMovilRepository();
        const plan = new PlanMovil();
        console.log(req.body);
        plan.idServicio = servicio;
        plan.NombrePlan = req.body.NombrePlan;
        plan.Descripcion = req.body.Descripcion;
        plan.PrecioMensual = req.body.PrecioMensual;
        plan.Minutos = req.body.Minutos;
        plan.GBInternet = req.body.GBInternet;
        plan.CostoLlamada = req.body.CostoLlamada;
        plan.TipoPlan = req.body.TipoPlan;
        const resultado = await repository.save(plan);
        res.send(resultado);
    }
    catch(err){
        return next(err);
    }
});


///////////////////////////  Plan Móvil Dispositivo //////////////////////////////////////
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
        console.log(servicio);
        const repository = await connect.getPlanFijoRepository();
        const plan = new PlanFijo();
        console.log(req.body);
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
        const planfijo = await getManager().query(
            "SELECT * FROM plan_fijo where plan_fijo.ID = ?;",[req.params.id]);
        const contrato = await getManager().query(
            "SELECT * FROM contrato where contrato.idServicioId = ?;",[planfijo[0].idServicioId]);
        if (contrato==false){
            console.log("Si se puede modificar")
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
        }else{
            console.log("no se puede modificar")
        }
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
        const contrato = await getManager().query(
            "SELECT * FROM contrato where contrato.idServicioId = ?;",[planfijo[0].idServicioId]);
        if (contrato==false){
            console.log("si se puede borrar")
            const planfijoDelete = await getManager().query(
                "DELETE FROM plan_fijo WHERE plan_fijo.ID = ?;",[req.params.id]);
            const servicio = await getManager().query(
                "DELETE FROM servicio where servicio.Id = ?;",[planfijo[0].idServicioId]);
        }else{
            console.log("no se puede borrar porque hya uno usando vacido")
        }
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
        const planinternet = await getManager().query(
            "SELECT * FROM plan_internet where plan_internet.ID = ?;",[req.params.id]);
        const contrato = await getManager().query(
            "SELECT * FROM contrato where contrato.idServicioId = ?;",[planinternet[0].idServicioId]);
        if (contrato==false){
            console.log("Si se puede modificar")
            console.log(req.body)
            const repository = await connect.getPlanInternetRepository();
            let planUpdate = await repository.findOne(req.params.id);
            planUpdate.NombrePlan = req.body.NombrePlan;
            planUpdate.Velocidad = req.body.Velocidad;
            planUpdate.Descripcion = req.body.Descripcion;
            planUpdate.PrecioMensual = req.body.PrecioMensual;
            // planUpdate.Tipo = req.body.Tipo;
            await repository.save(planUpdate);
        }else{
            console.log("no se puede modificar porque hya uno usando vacido")
        }
        res.send('OK');
    } 
    catch(err){
        console.log(err)
    }
});

//*DELETE planinternet
router.delete('/planinternet/:id',async function (req:Request, res:Response, next:NextFunction){
    console.log("delete plan internet");
    try{
        const planinternet = await getManager().query(
            "SELECT * FROM plan_internet where plan_internet.ID = ?;",[req.params.id]);
        const contrato = await getManager().query(
            "SELECT * FROM contrato where contrato.idServicioId = ?;",[planinternet[0].idServicioId]);
        if (contrato==false){
            console.log("si se puede borrar")
            const planinternetDelete = await getManager().query(
                "DELETE FROM plan_internet WHERE plan_internet.ID = ?;",[req.params.id]);
            const servicio = await getManager().query(
                "DELETE FROM servicio where servicio.Id = ?;",[planinternet[0].idServicioId]);
        }else{
            console.log("no se puede borrar porque hya uno usando vacido")
        }
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

router.get('/servicio/:idServicio', async function(req: Request, res:Response, next:NextFunction){
    try{
        console.log(req.params.idServicio)
        const servicioRepository = await connect.getServicioRepository();
        const service = await servicioRepository.findOne(req.params.idServicio)
        console.log(service)
        let data;
        let query = ""
        if(service.Nombre == "PlanInternet"){
            console.log("PlanInternet")
            const repository = await connect.getPlanInternetRepository();
            data = await repository.findOne({where:{IdServicio : service.Id}});
        }
        else if(service.Nombre == "PlanInternetPlanFijo"){
            console.log("PlanInternetPlanFijo");
             query +="select plan_internet_plan_fijo.ID, plan_internet_plan_fijo.PrecioMensual as PrecioMensual,  CONCAT(plan_fijo.NombrePlan, '+', plan_internet.NombrePlan) as NombrePlan  from  plan_internet_plan_fijo ";
             query +="join plan_fijo on plan_fijo.ID = plan_internet_plan_fijo.idPlanFijoID ";
             query +="join plan_internet on plan_internet.ID = plan_internet_plan_fijo.idPlanInternetID ";
             query +=`where plan_internet_plan_fijo.idServicioId = ${service.Id};`;
            const repository = await connect.getPlanInternetPlanFijoRepository();
            data = await repository.query(query);
            data = data[0]
        }
        else if(service.Nombre == "PlanMovil" || service.Nombre == "PostPago" || service.Nombre == "Prepago"){
            console.log("PlanMovil")
            const repository = await connect.getPlanMovilRepository();
            data = await repository.findOne({where:{idServicio : service.Id}});
        }
        else if(service.Nombre == "PlanFijo"){
            console.log("PlanFijoRepository")
            const repository = await connect.getPlanFijoRepository();
            data = await repository.findOne({where:{IdServicio : service.Id}});
        }  
        else if(service.Nombre == "PlanInternetPlanMovilPlanFijo"){
            console.log("PlanInternetPlanMovilPlanFijo")
            const repository = await connect.getPlanInternetPlanMovilPlanFijoRepository();
           query +="SELECT plan_internet_plan_movil_plan_fijo.ID, plan_internet_plan_movil_plan_fijo.PrecioMensual as PrecioMensual,  CONCAT(plan_fijo.NombrePlan, '+', plan_internet.NombrePlan, '+', plan_movil.NombrePlan) as NombrePlan FROM plan_internet_plan_movil_plan_fijo "
           query +="INNER JOIN plan_fijo on plan_fijo.ID = plan_internet_plan_movil_plan_fijo.idPlanFijoID "
           query +="INNER JOIN plan_internet on plan_internet.ID = plan_internet_plan_movil_plan_fijo.idPlanInternetID "
           query +="INNER JOIN plan_movil on plan_movil.ID = plan_internet_plan_movil_plan_fijo.idPlanMovilID "
           query +=`WHERE plan_internet_plan_movil_plan_fijo.idServicioId = ${service.Id};`
           data = await repository.query(query);
           data = data[0]
        } 
        else if(service.Nombre == "PlanMovilDispositivo"){
            console.log("PlanMovilDispositivo")
            const repository = await connect.getPlanMovilDispositivoRepository();
           
            query += "select plan_movil_dispositivo.ID, plan_movil_dispositivo.Precio as PrecioMensual,  CONCAT(plan_movil.NombrePlan ,'+', dispositivo.Marca , '+', dispositivo.Modelo ) as NombrePlan  from  plan_movil_dispositivo "
            query += "join dispositivo on dispositivo.ID = plan_movil_dispositivo.idDispositivoId "
            query += "join plan_movil on plan_movil.ID = plan_movil_dispositivo.idPlanID "
            query += `where plan_movil_dispositivo.idServicioIdId = ${service.Id};`
            data = await repository.query(query)
            data = data[0]
        } 
        return res.send(data)
    }
    catch(err){
            return next(err);
    }
});
////////////////////////////////  Nuevo contrato ///////////////////////////////////////

router.put('/contrato/', async function(req: Request, res:Response, next:NextFunction){
    try{
    const repository = await connect.getContratoRepository();
    repository.query(`INSERT INTO contrato(FechaContratado, Estado, idServicioId, idClienteId) values(curdate() , 1, ${req.body.IdServicio}, ${req.body.IdCliente}) `)
    return res.send("OK")
    }
    catch(err){
        return next(err);
}
});
 


router.post('/factura/:idUsuario',  async function(req: Request, res:Response, next:NextFunction){
    const clienteRepository = await connect.getClienteRepository();
    const services = req.body.services;
    const devices = req.body.devices;
    console.log(req.params.idUsuario)
    const user = await clienteRepository.findOne(req.params.idUsuario)
    let total = 0;
    let message = {
        from: 'tucorreo@gmail.com',
        to: (await user).Correo,
        subject: 'Factura TECH.SA',
        text: req.body.resumen,
      };
      transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
      })
      return res.send
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
router.get('/pagoEnLinea/plan_internet_plan_fijo', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getPlanInternetPlanMovilPlanFijoRepository();
        let query ='SELECT pipf.idServicioId,pf.NombrePlan AS "nombreFijo",pi.NombrePlan AS "nombreInternet",pf.Minutos,pf.FijoTechsa,pf.FijoOperador,pf.MovilCualquiera,pipf.PrecioMensual,pi.Descripcion'
         query += ' FROM  plan_internet_plan_fijo pipf '
         query += ' INNER JOIN plan_fijo pf ON pipf.idPlanFijoID = pf.ID '
         query += ' INNER JOIN plan_internet pi WHERE pipf.idPlanInternetID = pi.ID '
        const services = await repository.query(query)
       
        
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

router.get('/pagoEnLinea/plan_internet_plan_movil_plan_fijo', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getContratoRepository();
        let query = 'SELECT pipmpf.idServicioId, pf.Minutos, pf.FijoTechsa,pf.FijoOperador,pipmpf.PrecioMensual,pf.NombrePlan AS "nombreFijo",pi.Velocidad,pi.Descripcion,pm.NombrePlan  '
        query += 'FROM plan_internet_plan_movil_plan_fijo pipmpf '
        query += 'INNER JOIN plan_fijo pf ON pipmpf.idPlanFijoID = pf.ID '
        query += 'INNER JOIN plan_internet pi ON pipmpf.idPlanInternetID = pi.ID '
        query += 'INNER JOIN plan_movil pm ON pipmpf.idPlanMovilID = pm.ID '
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
        let query = 'SELECT c.Id,pm.Minutos,d.Marca AS "dispositivo",pm.PrecioMensual,pm.Descripcion,pm.NombrePlan,pm.CostoLlamada,pm.GBInternet, d.Modelo,d.Marca FROM contrato c '
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
router.get('/pagoEnLinea/plan_movil_dispositivo', async function(req: Request, res:Response, next:NextFunction){
    try{
        const repository = await connect.getContratoRepository();
        let query ='SELECT pmd.idServicioIdId AS "idServicioId", pm.Minutos,d.Marca AS "dispositivo",pm.PrecioMensual,pm.Descripcion,pm.NombrePlan,pm.CostoLlamada,pm.GBInternet, d.Modelo,d.Marca '
        query += 'FROM plan_movil_dispositivo pmd '
        query += 'INNER JOIN plan_movil pm ON pmd.idPlanID = pm.ID '
        query += 'INNER JOIN dispositivo d  ON pmd.idDispositivoID = d.ID '
        const services = await repository.query(query)
        
        res.send(services);
    }
    catch(err){
            return next(err);
    }
});
router.get('/pagoEnLinea/todosTipoPlanes/:idContrato', async function(req: Request, res:Response, next:NextFunction){
    try{    
        
        const repository = await connect.getContratoRepository();
        let query = 'SELECT s.Nombre FROM contrato c '
        query += 'INNER JOIN servicio s ON c.idServicioId = s.Id '
        query += `WHERE c.Id = ${req.params.idContrato} ;`
        
        const tipo = await repository.query(query)
        
        res.send(tipo);
    }
    catch(err){
            return next(err);
    }
});

router.put('/pagoEnLinea/pagar/:idContrato', async function(req: Request, res:Response, next:NextFunction){
    try{
        const contratoRepository = await connect.getContratoRepository();
        const res = await contratoRepository.query(`UPDATE contrato SET Estado=true,FechaContratado=(SELECT DATE(DATE_ADD(FechaContratado, INTERVAL 1 MONTH))) WHERE Id=${req.params.idContrato};`)
        return res
    }
    catch(err){
            return next(err);
    }
});

router.get('/pagoEnLinea/isMoroso/:idContrato', async function(req: Request, res:Response, next:NextFunction){
    try{
        const contratoRepository = await connect.getContratoRepository();
        const resp = await contratoRepository.query(`SELECT c.Estado FROM contrato c WHERE Id=${req.params.idContrato};`)
        res.send(resp)
    }
    catch(err){
            return next(err);
    }
});

router.get('/pagoEnLinea/get/:idContrato', async function(req: Request, res:Response, next:NextFunction){
    try{
        const contratoRepository = await connect.getContratoRepository();
        const contrato = await contratoRepository.findOne({where:{Id : req.params.idContrato }})
        res.send(contrato);
    }
    catch(err){
            return next(err);
    }
});
router.delete('/pagoEnLinea/cancelar/:idContrato', async function(req: Request, res:Response, next:NextFunction){
    try{
        const contratoRepository = await connect.getContratoRepository();
        
         await contratoRepository.delete(req.params.idContrato)
        
        res.send('OK');
    
    }
    catch(err){
            return next(err);
    }
});


router.put('/pagoEnLinea/actualizar/:idContrato', async function(req: Request, res:Response, next:NextFunction){
    try{
        
        const repository = await connect.getContratoRepository();
        let contratoUpdate = await repository.findOne(req.params.idContrato);

        contratoUpdate.IdServicio = req.body.idservicioid;
        await repository.save(contratoUpdate);
    
    }
    catch(err){
            return next(err);
    }
});
