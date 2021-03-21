import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import db from './database'
import dotenv from 'dotenv'; dotenv.config();

const app:Application = express();

db.authenticate().then(()=>{console.log('Database connected')}).catch(e=>{console.log(e)})

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1',router);

app.listen(3000, ()=>{console.log("Servidor corriendo en puerto 3000")})