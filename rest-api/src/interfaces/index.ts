import {Request, Response, NextFunction} from 'express';

export default interface Iempresa{
    add(a:Request, b:Response, c:NextFunction):Promise<void>
    list(a:Request, b:Response, c:NextFunction):Promise<void>
    query(a:Request, b:Response, c:NextFunction):Promise<void>
    update(a:Request, b:Response, c:NextFunction):Promise<void>
    delete(a:Request, b:Response, c:NextFunction):Promise<void>
    activate(a:Request, b:Response, c:NextFunction):Promise<void>
    deactivate(a:Request, b:Response, c:NextFunction):Promise<void>
}