const express = require('express')
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


