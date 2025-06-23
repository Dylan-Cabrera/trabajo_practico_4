import express from "express";
import dotenv from "dotenv";
import routerCharacter from "./src/routes/character.routes.js";
import { startBD } from "./src/config/database.js";
dotenv.config();

const app = express(); 
const PORT = process.env.PORT;

app.use("/api", routerCharacter)

app.listen(PORT, () => {
    startBD();
    console.log(`El servidor se esta ejecutando en el puerto ${PORT}`)
})

