import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

export const startBD = async () => {
    try {
        await sequelize.authenticate();
        console.log("Se conecto a la base de datos")
        await sequelize.sync();
    } catch(error) {
        console.log(`Hubo un error al conectar a la base de datos ${error}`)
    }
}