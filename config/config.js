import dotenv from 'dotenv'

dotenv.config()

// Data base configuration  

export default {

    "username": "root",
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  
  }