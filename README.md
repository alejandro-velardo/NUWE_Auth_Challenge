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
 
Or use MySQL export files provided in the project's 'db' directory.

Once this is done, this project has used environment variables, so a '.env' file should be created, providing
the following variables, in capital leters and without space (such as VARIABLE=variable):
 
    PORT // the number of the port in which the server will be deployed.
    DB_NAME // the name of the database formerly created.
    EXPIRED_AFTER // the time, in miliseconds, that the user's session will last.
    SECRET_KEY // a secret key provided to sign the user's tokens.
  
Finally, in the requests.http file, the api can be tested. The requests are already detailed there, you just need 
have the REST Client extension installed in VScode. If not, use this file as documentation to understand the API's
functioning.

 
 

 
    
  
