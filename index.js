require('dotenv').config
const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello my name is nikhil this is my first deployed app I am from jhajha Bihar I am working in Pune')
})

app.get('/login', (req,res) => {
    res.send('Welcome Nikhil')
})

app.get('/about', (req, res)=>{
  res.send(`<h1>Hey this is about section of developer Nikhil Kumar , you are on the right place now</h1>`)
})

// Serve index.html for the root route
app.get('/mainn', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
