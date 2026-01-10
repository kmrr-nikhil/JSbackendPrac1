require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TrackIt | Jira-like Tool</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f5f7;
      color: #172b4d;
    }
    header {
      background: white;
      padding: 16px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    header h2 {
      color: #0052cc;
    }
    .hero {
      text-align: center;
      padding: 80px 20px;
    }
    .hero h1 {
      font-size: 48px;
      margin-bottom: 12px;
    }
    .hero p {
      font-size: 18px;
      margin-bottom: 30px;
    }
    .btn {
      background: #0052cc;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    .features {
      display: flex;
      justify-content: center;
      gap: 24px;
      padding: 40px;
    }
    .card {
      background: white;
      padding: 24px;
      width: 250px;
      border-radius: 6px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    footer {
      text-align: center;
      padding: 20px;
      background: #091e42;
      color: white;
    }
  </style>
</head>

<body>

<header>
  <h2>TrackIt</h2>
  <div>
    <button class="btn">Login</button>
  </div>
</header>

<section class="hero">
  <h1>Plan. Track. Ship.</h1>
  <p>A simple Jira-like project management tool</p>
  <button class="btn">Get Started</button>
</section>

<section class="features">
  <div class="card">
    <h3>📋 Issues</h3>
    <p>Create and track bugs and tasks.</p>
  </div>
  <div class="card">
    <h3>📊 Boards</h3>
    <p>Visual Kanban workflow.</p>
  </div>
  <div class="card">
    <h3>⚡ Fast</h3>
    <p>Minimal and fast for teams.</p>
  </div>
</section>

<footer>
  © 2026 TrackIt
</footer>

</body>
</html>
`)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
