import { dataTypes, sequelize } from "../config/loadSequelize.js";



const User = sequelize.define('Users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER
    },
    email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    password: dataTypes.STRING
}, { tableName: 'users', timestamps: false });

export {User}