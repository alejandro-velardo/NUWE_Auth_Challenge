# NUWE_Auth_Challenge
Authentication server using JWT

This is a back-end authentication server developed using NodeJS' Express framework, MySQL and Json Web Tokens. 
In addition, VS code's extension REST Client is used to provide the testing of the basic features, which are
Register users, LogIn users and access to private endpoints.

To run this project you will need to clone the repository:

  git clone https://github.com/alejandro-velardo/NUWE_Auth_Challenge.git
 
 Install the dependencies:
 
  npm install
 
Start MySQL in you computer's terminal:

  mysql -u root -p

Create the database:

  CREATE DATABASE db_name;
  
Create table users with the following command:

    CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(45),
    password VARCHAR(256)
  );
 
 Or use the export documents provided in the 'db' directory.
 
 Once this is done, this project has used environment variables, so a '.env' file should be created, providing
 the following variables:
 
    PORT // the number of the port in which the server will be deployed.
    DB_NAME // the name of the database formerly created.
    EXPIRED_AFTER // the time, in miliseconds, that the user's session will last.
    SECRET_KEY // a secret key provided to sign the user's tokens.
  

 
 

 
    
  
