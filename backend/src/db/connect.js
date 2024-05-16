const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
	host: process.env.HOST_DB,
	port: process.env.PORT_DB,
	user: process.env.USER_DB,
	password: process.env.PASSWORD_DB,
  	database: process.env.DATABASE,
});



module.exports = connection;