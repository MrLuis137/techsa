import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {router as planMovilRouter} from './logic/PlanMovilLogic'


const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(planMovilRouter)

app.listen(4201, () => {
  return console.log('My Node App listening on port 4201');
});