import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {router as connectionsRouter} from './logic/Logic'



const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(connectionsRouter)

app.listen(4201, () => {
  return console.log('My Node App listening on port 4201');
});