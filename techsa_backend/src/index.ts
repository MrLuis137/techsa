//Express
import * as express from "express";
import {Request, Response} from "express";
//TypeORM
import "reflect-metadata";
import {createConnection, Repository} from "typeorm";
import { Gerente } from './entity/Gerente';
import {Dispositivo} from './entity/Dispositivo';
import {Servicio} from './entity/Servicio';
import { Cliente } from './entity/Cliente';
import { Contrato } from './entity/Contrato';
import { AgenteVentas } from './entity/AgenteVentas';

createConnection().then(async connection => {
    const clienteRepository = connection.getRepository(Cliente);
    const servicioRepository = connection.getRepository(Servicio);
    const contratoRepository = connection.getRepository(Contrato);
    const dispositivoRepository = connection.getRepository(Dispositivo);


    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //                                  Cliente
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    const app = express();
    app.use(express.json)
    
    //Nuevo Cliente
    app.post("/users" , async function (req: Request, res: Response) {
        const user = await clienteRepository.create(req.body);
        const results = await clienteRepository.save(user);
        return res.send(results);
        
    } )

    //Ver todos los usuarios
    app.get("/users", async function(req: Request, res: Response) {
        const results = await clienteRepository.find();
        return res.send(results);
    });
    
    //Usuario por id
    app.get("/users/:id", async function(req: Request, res: Response) {
        const cliente = await clienteRepository.findOne(req.params.id);
        return res.send(cliente);
    });
    
    //Actualizar usuario por id
    app.put("/users/:id", async function(req: Request, res: Response) {
        const user = await clienteRepository.findOne(req.params.id);
        clienteRepository.merge(user, req.body)
        const results = await clienteRepository.save(user)
        return res.send(results);
    });
    
    //Delete user by id
    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await clienteRepository.delete(req.params.id);
        return res.send(results);
    });

    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //                                  Cliente
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //Nuevo dispositivo
    app.post("/devices-managment" , async function (req: Request, res: Response) {
        const device = await dispositivoRepository.create(req.body);
        const results = await dispositivoRepository.save(device);
        return res.send(results);
    } )
    
    app.listen(3000);
    console.log("Servidor iniciado")

}).catch(error => console.log(error));