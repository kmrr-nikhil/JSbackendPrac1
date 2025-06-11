require('dotenv').config
const express = require('express')
const app = express()
const port = 4000;
const path=require('path')
const jsonObj={
  "login": "kmrr-nikhil",
  "avatar_url": "https://avatars.githubusercontent.com/u/56150013?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kmrr-nikhil",
  "html_url": "https://github.com/kmrr-nikhil",
  "followers_url": "https://api.github.com/users/kmrr-nikhil/followers",
  "following_url": "https://api.github.com/users/kmrr-nikhil/following{/other_user}",
  "gists_url": "https://api.github.com/users/kmrr-nikhil/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kmrr-nikhil/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kmrr-nikhil/subscriptions",
  "organizations_url": "https://api.github.com/users/kmrr-nikhil/orgs",
  "repos_url": "https://api.github.com/users/kmrr-nikhil/repos",
  "events_url": "https://api.github.com/users/kmrr-nikhil/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kmrr-nikhil/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Nikhil Kumar",
  "company": "PTC Software",
  "blog": "",
  "location": "Pune, Maharashtra",
  "email": null,
  "hireable": null,
  "bio": "Professional Quality Analyst with more than 5 years of experience\r\nin software quality processes. Involved in end-to-end product\r\ntesting.",
  "twitter_username": "kmrr_nikhil",
  "public_repos": 10,
  "public_gists": 0,
  "followers": 1,
  "following": 7
}

app.get('/', (req, res) => {
  res.send('Testing this web app')
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

app.get('/github', (req, res)=>{
  res.json(jsonObj)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
