const express = require('express');
const bodyParser = require('body-parser');
const modules = require('./src/routes');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', modules);
app.get('api', (req, res) => {
  res.status(200).json({ message: 'Welcome to student api' });
});
app.use('*', (req, res) => {
  res.status(200).send({ message: 'Invalid Api Endpoints' });
});

const PORT = 5002;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
