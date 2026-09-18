const express = require('express');
const app = express()
const port = 3000

app.use(express.json());

app.use((req, res, next) => {
  console.log(new Date(), req.method, req.url);
  next();
});


app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(id);
});

app.get('/search', (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send(id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});