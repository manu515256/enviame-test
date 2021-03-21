import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'empresas_enviame',
    'root',
    'passmuysegura',
    {
        host:'localhost',
        dialect:'mysql',
        logging:false
    }
);

export default sequelize;