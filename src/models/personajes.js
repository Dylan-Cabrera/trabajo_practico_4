import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Personaje = sequelize.define(
    "Personaje", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ki: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        race: {
            type: DataTypes.STRING,
            allowNull:false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING
        }

        
    }
)