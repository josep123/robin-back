require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5002
const mongoose = require('./src/bbdd/mongo')
const bodyPaser = require('body-parser');
const appRouter = require('./src/controllers')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const cors = require('cors')
app.use(cors())

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ extended : true }))


app.use(express.json());
app.use('/api', appRouter);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,PATCH");
    next();
  });

  app.listen(port, () => {
    console.log(`Pequeño padawan el servidor esta funcionando en http://localhost:${port}`)
  })  