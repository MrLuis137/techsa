//Express
import * as express from "express";
import * as cors from 'cors';
import * as bodyParser from 'body-parser'
import {router as planMovilRouter} from './entityLogic/PlanMovilLogic'

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(planMovilRouter);
app.listen(3000, ()=> {
    return console.log('My node app listening on port 3000')
})

//import {Request, Response} from "express";
//TypeORM
// import "reflect-metadata";
// import {createConnection, Repository} from "typeorm";
// import { Gerente } from './entity/Gerente';
// import {Dispositivo} from './entity/Dispositivo';
// import { Servicio } from './entity/Servicio';
// import { Cliente } from './entity/Cliente';
// import { Contrato } from './entity/Contrato';
// import { AgenteVentas } from './entity/AgenteVentas';
// import { PlanInternet } from './entity/PlanInternet';
// import { PlanInternetPlanMovil } from './entity/PlanIntertnetPlanMovil';
// import { PlanMovil } from './entity/PlanMovil';
// import { PlanMovilDispositivo } from './entity/PlanMovilDispositivo';

//createConnection().then(async connection => {
    // const clienteRepository = connection.getRepository(Cliente);
    // const servicioRepository = connection.getRepository(Servicio);
    // const contratoRepository = connection.getRepository(Contrato);
    // const planMovilRepository = connection.getRepository(PlanMovil);
    // const planMovilDispositivo = connection.getRepository(PlanMovilDispositivo);


    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //                                  Cliente
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    // const app = express();
    // app.use(express.json)
    
    // //Nuevo Cliente
    // app.post("/users" , async function (req: Request, res: Response) {
    //     const user = await clienteRepository.create(req.body);
    //     const results = await clienteRepository.save(user);
    //     return res.send(results);
        
    // } )

    // //Ver todos los usuarios
    // app.get("/users", async function(req: Request, res: Response) {
    //     const results = await clienteRepository.find();
    //     return res.send(results);
    // });
    
    // //Usuario por id
    // app.get("/users/:id", async function(req: Request, res: Response) {
    //     const cliente = await clienteRepository.findOne(req.params.id);
    //     return res.send(cliente);
    // });
    
    // //Actualizar usuario por id
    // app.put("/users/:id", async function(req: Request, res: Response) {
    //     const user = await clienteRepository.findOne(req.params.id);
    //     clienteRepository.merge(user, req.body)
    //     const results = await clienteRepository.save(user)
    //     return res.send(results);
    // });
    
    // //Delete user by id
    // app.delete("/users/:id", async function(req: Request, res: Response) {
    //     const results = await clienteRepository.delete(req.params.id);
    //     return res.send(results);
    // });

    // //----------------------------------------------------------------------------------------------------------------------------------------------------------
    // //                                  Cliente
    // //----------------------------------------------------------------------------------------------------------------------------------------------------------
    
    // //----------------------------------------------------------------------------------------------------------------------------------------------------------
    // //                                  Servicios
    // //----------------------------------------------------------------------------------------------------------------------------------------------------------
    // app.post("/planmovil", async function(req: Request, res: Response){
    //     const servicio = await  servicioRepository.create({Nombre:'Plan_Movil'});
    //     let planMovil = await planMovilRepository.create(req.body);
    //     planMovil[0].IdServicio = servicio;
    //     servicioRepository.save(servicio);
    //     const result = planMovilRepository.save(planMovil);
    //     res.send(result)
    // })

    // app.put("/planmovil:id"), async function (req:Request, res: Response) {
    //     const PlanMovil = await planMovilRepository.findOne(req.params.id);
    //     planMovilRepository.merge(PlanMovil, req.body);
    //     const results = await planMovilRepository.save(PlanMovil)
    //     return res.send(results)
    // }

    // app.get("/planmovil"), async function (req: Request, res: Response){
    //     console.log("omh")
    //     const results = planMovilRepository.find();
    //     return res.send(results);
    // }

    // app.get("/planmovil:id"), async function (req: Request, res: Response){
    //     const results = planMovilRepository.findOne(req.params.id);
    //     res.send(results);
    // }

    //Falta delete

    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //                                  Servicios
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    
//     app.listen(3000);
//     console.log("Servidor iniciado")

// }).catch(error => console.log(error));

