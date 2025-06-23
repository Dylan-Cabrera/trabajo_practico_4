import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Character = sequelize.define(
    "Character", {
        id: {
            primaryKey: true,
            autoIncrement: true,
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