import models from "../model";
import db from '../database'
import faker from "faker/locale/es_MX";

interface Iempresa {
    name?:string,
    rut?:number,
    address?:string
}

let empresas:Array<any> = [];

for (let i = 0;i<200;++i){ //200 registros fakes

    let objEmpresa:Iempresa = {
        name: faker.company.companyName(),
        rut: faker.random.number(9000000000),
        address: faker.address.streetAddress()
    }
    empresas.push(objEmpresa);
}

    let asd = async ()=>{
            try {
                
                let dbConnect = await db.authenticate
                let sync = await db.sync()

                for (let empr of empresas){
                    await models.Empresa.create(empr)
                }

            console.log("Base de datos llenada con elementos falsos")
            process.exit(0)
            }catch(e){
                console.log(e)
                process.exit(0)
            }
        }
        
asd();