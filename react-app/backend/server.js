const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors({ origin: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actions
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200); // to deal with chrome sending an extra options request
    }
  
    next(); // call next middleware in line
  });

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true})

mongoose.connection.once('open', () => {
    console.log('mongoDB connected successfully')
})

const customerRouter = require('./routes/customer.crypto')
app.use('/customer', customerRouter)

app.listen(5000, function() {
    console.log('express server is running on port 5000')
})