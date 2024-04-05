import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/contact.routes.js';
import notfound from './middlewares/notfound.js';
import swaggerUi from "swagger-ui-express"
import swagger from "./doc/swagger.json" assert{type:'json'}

app.use(express.json());
app.use(cors());
app.use(router)
app.use(notfound)


mongoose.connect(configuration.mongoURI)
.then(() => {
   console.log("connected to DB") 
})
.catch(err => {
    console.log(err);
});
app.use('ContactApp',swaggerUi.serve,swaggerUi.setup(swagger))
app.listen(configuration.port, ()=> {
    console.log("listening on port "+configuration.port);
});