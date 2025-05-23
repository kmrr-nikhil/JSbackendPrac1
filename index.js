require('dotenv').config
const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello my name is nikhil this is my first deployed app I am from jhajha Bihar')
})

app.get('/login', (req,res) => {
    res.send('Welcome Nikhil')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
