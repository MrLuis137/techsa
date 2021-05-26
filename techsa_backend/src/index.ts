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

    /*const app = express();
    app.use(express.json)
    
    //Create user
    app.post("/users" , async function (req: Request, res: Response) {
        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
        
    } )

    //Get user
    app.get("/users", async function(req: Request, res: Response) {
        const results = await userRepository.find();
        return res.send(results);
    });
    
    //Get user by idcd
    app.get("/users/:id", async function(req: Request, res: Response) {
        // here we will have logic to return user by id
    });
    
    //Update user by id
    app.put("/users/:id", async function(req: Request, res: Response) {
        // here we will have logic to update a user by a given user id
    });
    
    //Delete user by id
    app.delete("/users/:id", async function(req: Request, res: Response) {
        //
    });
    app.listen(3000);
    console.log("Servidor iniciado")*/

}).catch(error => console.log(error));