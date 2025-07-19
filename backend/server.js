
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

const quotes = [
  "First, solve the problem. Then, write the code. – John Johnson",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "In order to be irreplaceable, one must always be different. – Coco Chanel",
  "Java is to JavaScript what car is to Carpet. – Chris Heilmann"
];

app.get('/', (req, res) => {
  res.send('QuotePulse API is running. Visit /api/quote for a quote.');
});

app.get('/api/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`QuotePulse backend running at http://localhost:${PORT}`);
});
