import models from '../model';
import { Request, Response, NextFunction } from 'express';
import Iempresa from '../interfaces'


export default class Empresa implements Iempresa{

    async add(req:Request, res:Response, next:NextFunction):Promise<void>{

        try {

            const reg = await models.Empresa.create(req.body);

            res.status(200).send(reg);
        }catch(e){

            next(e);
            res.status(500).send("An error ocurred");
        }

    }

    async list(req:Request, res:Response, next:NextFunction):Promise<void>{
        
        try {

            const reg = await models.Empresa.findAll({
                where:{
                    state:1
                },
                order:[['name','ASC']]
            })

            res.status(200).send(reg)
        }catch(e){
            next(e);
            res.status(500).send("An error ocurred");
        }
        
    }
    async query(req:Request, res:Response, next:NextFunction):Promise<void>{


    }
    async update(req:Request, res:Response, next:NextFunction):Promise<void>{

       
    }
    async delete(req:Request, res:Response, next:NextFunction):Promise<void>{

      
    }

    async activate(req:Request, res:Response, next:NextFunction):Promise<void>{

      
    }
    async deactivate(req:Request, res:Response, next:NextFunction):Promise<void>{

      
    }
}