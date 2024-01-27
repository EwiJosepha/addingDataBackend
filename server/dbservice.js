const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
let instance = null;
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect((err) => {
  if (err) {
    console.error("err.message", err);
  }
  console.log("hello");
  console.log("data base " + process.env.DB_NAME);
})

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService()
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "select * from names";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message))
          resolve(results)
        })
      })
      console.log(response);
      return response;

    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = DbService

