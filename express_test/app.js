const express = require('express')

const app = express()

const port = 3000


// middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.post('/post', (req, res) => {

  console.log("Data:", req.body)

  res.send("POST request received")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


