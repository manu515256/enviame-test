import models from '../model';
import { Request, Response, NextFunction } from 'express';
import Iempresa from '../interfaces';


export default class Empresa implements Iempresa {

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

        try {

            const reg = await models.Empresa.findOne({where:{id:req.query.id}});

            res.status(200).send(reg);
        }catch(e){
            next(e);
            res.status(500).send("An error ocurred")
        }

    }
    async update(req:Request, res:Response, next:NextFunction):Promise<void>{

        try {

            const reg = await models.Empresa.update({
                name:req.body.name,
                rut:req.body.rut,
                address:req.body.address, 
            },
            {
                where:{
                    id:req.body.id
                }
            })
            res.status(200).send(reg);
        }catch(e){
            next(e);
            res.status(500).send("An error ocurred");
        }
       
    }
    async delete(req:Request, res:Response, next:NextFunction):Promise<void>{

        try {
            const reg = await models.Empresa.destroy({
                where:{
                    id:req.body.id
                }
            })
        }
        catch(e){
            next(e);
            res.status(500).send("An error ocurred");
        }
    }
    async activate(req:Request, res:Response, next:NextFunction):Promise<void>{

        try {
            const reg = models.Empresa.update({
                state:1
            },
            {
                where:{
                    id:req.body.id
                }
            })
            res.status(200).send(reg)
        }catch(e){
            next(e);
            res.status(500).send("An error ocurred");
        }
      
    }
    async deactivate(req:Request, res:Response, next:NextFunction):Promise<void>{

        try {
            const reg = models.Empresa.update({

                state:0
            },
            {
                where:{
                    id:req.body.id
                }
            })
            res.status(200).send(reg)
        }catch(e){
            next(e);
            res.status(500).send("An error ocurred");
        }
      
    }
}