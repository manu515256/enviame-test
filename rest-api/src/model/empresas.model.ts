import { DataTypes } from 'sequelize';
import db from '../database';

const Empresa = db.define('empresa',{
    id:{
        type:DataTypes.SMALLINT, 
        primaryKey:true, 
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    rut:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true
    },
    address:{
        type:DataTypes.STRING,
    },
    state:{
        type:DataTypes.SMALLINT,
        defaultValue:1
    }
});

Empresa.sync().then(()=>{console.log("tabla empresa creada!")}).catch(e=>{console.log(e)});


export default Empresa;