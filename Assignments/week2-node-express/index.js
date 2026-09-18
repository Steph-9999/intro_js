const express = require('express'); // Bring Express into our project
const app = express();              // Create our Express application
require('dotenv').config();
const port = process.env.PORT;                  // The port our server will use

app.use(express.json());

app.get('/', (req, res) => {
  res.send("My Week 2 API!");
});

app.post( "/user" , (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
    return res.status(400).send(`Missing fields`);}
    res.send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} profile`);
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

