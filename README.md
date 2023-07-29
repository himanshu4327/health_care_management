## Project - capnolearner-api

This repository contains the backend code for an application built using Node.js and Express.js. It provides RESTful APIs for various functionalities related to GO-personal, ,GO-basic and GO-professional users. The application uses MySQL as its database and includes features like jwt token auth,aws-s3,email sending and Swagger documentation.

## Prerequisites

Before running the application, make sure you have the following software installed on your machine:

- Node.js (>=14.x.x)
- MySQL (>=5.7.x)
- A code editor (preferably Visual Studio Code)

## Installation

1. Clone this repository to your local machine:

- open any terminal in your local machine here we are using bash

````bash
git clone <'https://github.com/himotechglobal/capnolearner-api.git'>
cd <capnolearner-api/>

- Install the required dependencies using npm
```bash
npm install


- Application Configuration
- The application uses environment variables for configuration. To set up the necessary variables, follow these steps:

Step 1: Create a `.env` file

- Create a file named `.env` in the root directory of your project. This file will store all the required environment variables with their corresponding values.

Step 2: Set the environment variables

- Open the `.env` file in a text editor and add the following lines:

PORT=<port_number>
DB_USER=<database_username>
DB_NAME=<database_name>
DB_PASS=<database_password>
DB_HOST=<database_host>
TOKEN_KEY=<your_token_key>
FTP_HOST=<ftp_host>
FTP_PORT=<ftp_port>
FTP_USER=<ftp_username>
FTP_PASS=<ftp_password>
SMTP_USER=<smtp_username>
SMTP_PASS=<smtp_password>
SMTP_HOST=<smtp_host>
ACCESS_ID=<your_access_id>
ACCESS_KEY=<your_access_key>
S3_REGION=<s3_region>
FORM_BUCKET=<form_bucket>
SOFTWARE_BUCKET=<software_bucket>
DATA_BUCKET=<data_bucket>
NODE_ENV=development


- Replace `<port_number>`, `<database_host>`, `<database_username>`, `<database_password>`, and `<database_name>`   with the appropriate values for your setup. Also, make sure to fill in the other variables according to your application's requirements.


- Environment Variables:
The following environment variables need to be set for the application to function correctly:

- `PORT`: The port number on which the server will run.
- `DB_USER`: The username for the database connection.
- `DB_NAME`: The name of the database to be used.
- `DB_PASS`: The password for the database user.
- `DB_HOST`: The host address of the database server.
- `TOKEN_KEY`: Your token key for authentication purposes.
- `FTP_HOST`: The host address for the FTP server.
- `FTP_PORT`: The port number for the FTP server.
- `FTP_USER`: The username for the FTP server.
- `FTP_PASS`: The password for the FTP user.
- `SMTP_USER`: The username for the SMTP server (for email services).
- `SMTP_PASS`: The password for the SMTP user.
- `SMTP_HOST`: The host address of the SMTP server.
- `ACCESS_ID`: Your access ID (if applicable for your application).
- `ACCESS_KEY`: Your access key (if applicable for your application).
- `S3_REGION`: The AWS S3 region (if using S3 services).
- `FORM_BUCKET`: The bucket name for storing form data (if using AWS S3).
- `SOFTWARE_BUCKET`: The bucket name for storing software files (if using AWS S3).
- `DATA_BUCKET`: The bucket name for storing data (if using AWS S3).
- `NODE_ENV`: Set this to `DEV` for development environment; for production, set it to `PROD`.

Make sure to replace the placeholders with the actual values you used in the `.env` file.

Remember to keep the `.env` file secure and never commit it to version control systems to protect sensitive information.

That's it! Your application should now be properly configured using environment variables.

Step 3: Use the application
- Usage

- To start the application, run the following command in your terminal or command prompt:

```bash
npm start

- If you have nodemon installed and want to use it for development purposes to automatically restart the server whenever changes are made to the code, you can use the following command:

```bash
nodemon

# Ensure that you are in the root directory of the project when running these commands. Also, make sure you have Node.js and npm (Node Package Manager) installed on your system before executing the commands.

Step 4: API Documentation
 - The API documentation is generated using Swagger and can be accessed through the following URL when the server is running:

 - http://localhost:<port_number>/api-doc

- To access the documentation, simply open the provided URL in your web browser while the server is running.
- Make sure to replace <port_number> with the actual port number on which the server is running. The API documentation provides detailed information about the available endpoints, request and response schemas, and other useful details for interacting with the API.


- Database Connection:
- The application establishes a database connection and performs a test query every 90 seconds to ensure the connection is active.

- Error Handling:
- Any errors that occur during the execution of API requests will be handled and returned as JSON responses with appropriate error messages.



























































































````
