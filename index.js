const express = require('express');
const bodyParser = require('body-parser');
const modules = require('./src/routes');

const db = require('./src/model');
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

db.sequelize
  .sync({ force: false, alter: true })
  .then(() => {
    console.log('DB Synced');
  })
  .catch((err) => {
    console.log('Failed to Sync DB : ', err.message);
  });
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
