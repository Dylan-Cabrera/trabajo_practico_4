import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express(); 
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en el puerto ${PORT}`)
})