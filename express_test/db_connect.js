const express = require('express')
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')
const { Pool } = require('pg')
const mysql = require('mysql')
const app = express()
const router = express.Router()
const port = 3000

//middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(bodyparser.json())

// var pool = new Pool({
//   host: "fitforge-db.c6jigttrktuk.us-west-1.rds.amazonaws.com",
//   user: "fitforge",
//   password: "fitforge",
//   port: 5432,
//   database: 'fitforge-db',
//   ssl: {
//     ca: "express_test/ssl_files/us-west-1-bundle.pem"
//   },
// })

// pool.query('SELECT NOW()', (err, result) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database at', dbConfig.host);
//   }
// });

let pool = mysql.createPool({
  host: 'fitforge.c6jigttrktuk.us-west-1.rds.amazonaws.com',
  user: 'fitforge',
  password: 'fitforge',
  port: '3306',
  database: 'fitforge'
})

//console.log("Database connected!")

// connection.connect(function(err) {
//   if (err) {
//     console.log("error!!!");
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
//   const query = 'SELECT * FROM users';
  
// });

const query = 'SELECT * FROM users';
pool.query(query, (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
})

// app.get("/", async (req, res) => {
//   connection.connect(function(err) {
//     if (err) {
//       console.error('Database connection failed: ' + err.stack);
//       return;
//     }
  
//     console.log('Connected to database.');
//   });
//   //const users = connection.query("select * from users");
//   //console.log(users)
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


