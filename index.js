const express = require('express');
const http = require('http');

const app = express();
const port = 3000;

// Endpoint to make the API request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/addresses', (req, res) => {
  res.json([
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Chennai' },
    { id: 3, name: 'Kolkata' }
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});