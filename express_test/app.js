const express = require('express')
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')
const { Pool } = require('pg')
const app = express()
const router = express.Router()
const port = 3000

const secretkey = "12345"

// middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.post('/post', (req, res) => {

  console.log("Data:", req.body)

  const username = req.body.username

  const token = jwt.sign({ username }, secretkey, { expiresIn: '1h' })

  res.json({ token })
})

app.post('/logincheck', (req, res) => {

  postrequest("localhost:3000/logincheck")
  console.log("Data:", req.body)

  const username = req.body.username

  const token = jwt.sign({ username }, secretkey, { expiresIn: '1h' })

  res.json({ token })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const pool = new Pool({
  user: "fitforge",
  host: "fitforge-db.c6jigttrktuk.us-west-1.rds.amazonaws.com",
  database: "fitforge-db",
  password: "Fitforge123%%",
  port: 5432,
});

app.get('/data', async (req, res) => {
  try {
    const client = await pool.connect(); // Get a connection from the pool
    const result = await client.query('SELECT * FROM users'); // Your SQL query here
    client.release(); // Release the connection back to the pool
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
