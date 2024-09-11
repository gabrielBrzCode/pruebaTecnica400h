import express from "express";
import dotenv from "dotenv";
import { connexionMongo } from "./config/dataBase.js/dataBase.js";
import cors from "cors"

const app = express();// configuramos nuestro servidor
dotenv.config(); // configuramos nuestras variables de entorno
const port = process.env.PORT;

connexionMongo();


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true 
  }));
//usamos rutas


//3. escuchar nuestro servidor (ejecutarlo)
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});