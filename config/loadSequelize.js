// Creating and exporting data base  

import config from './config.js'
import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: "mysql"
    }
);

export const dataTypes = DataTypes;