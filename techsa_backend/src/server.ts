import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {router as connectionsRouter} from './logic/Logic';
import * as connection from './connections/Connection';
import * as expressJwt from 'express-jwt';



const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(connectionsRouter)
  .use(expressJwt( {secret:'MENSAJESECRETO',algorithms: ['HS256']}).unless({path:['/auth']}));

app.listen(4201, () => {
  connection.connect();  //Se conecta a la base datos cuando se inicia el server
  return console.log('My Node App listening on port 4201');
});