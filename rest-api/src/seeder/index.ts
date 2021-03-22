import models from "../model";
import db from '../database'
import faker from "faker/locale/es_MX";

interface Iempresa {
    name?:string,
    rut?:number,
    address?:string
}

let empresas:Array<any> = [];

let randomNum:Array<number> = []
for (var i = 10000000; i <= 90000000; i++) randomNum.push(i);

randomNum = randomNum.sort( () => .5 - Math.random()); // SHUFFLE

for (let i = 0;i<600;++i){ //600 registros fakes

    let objEmpresa:Iempresa = {
        name: faker.company.companyName(),
        rut: randomNum[i],
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

            console.log("okk")
            process.exit(0)
            }catch(e){
                console.log(e)
                process.exit(0)
            }
        }
        
asd()