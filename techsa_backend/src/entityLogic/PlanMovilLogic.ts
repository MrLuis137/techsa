import{NextFunction, Request, Response,Router} from 'express'
import {getPlanMovilRepository , PlanMovil} from '../entity/PlanMovil'
import { Repository } from 'typeorm';
import { nextTick } from 'process';

export const router: Router = Router();

router.get('/planesmoviles', async function( req: Request, res:Response, nest: NextFunction){
    try{
        const repository = await getPlanMovilRepository();
        const todosPlanesMoviles = await repository.find();
        res.send(todosPlanesMoviles);
    }
    catch(err){
        return nextTick(err);
    }
});
