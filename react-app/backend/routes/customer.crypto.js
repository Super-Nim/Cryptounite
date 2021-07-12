require('dotenv').config()
const auth = require('./auth')
// const authenticate = require('./auth/')
const router = require('express').Router()
let CustomerModel = require('../models/customer.crypto.model')
const bcrypt = require('bcryptjs') // hash user passwords
const jwt = require('jsonwebtoken') // auth token


router.get('/', (req, res) => {

    CustomerModel.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json(err))
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // space -> TOKEN
    // if authHeader exists return TOKEN , else undefined
    // format = header=Bearer TOKEN
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, customer) => {
        if (err) return res.send(403) // you have a token, but it has expired
        req.customer = customer
        next()

    })
    // need to use middleware to accept customer.firstName in .verify()
}

router.get('/:firstName', authenticateToken, (req, res) => {

   CustomerModel.findOne({
       firstName: req.query.firstName
   })

    // CustomerModel.find()
    // .then(customer => res.json(customer))
    // .then(res.json(customer.filter( customer => customer.firstName === req.customer.firstName)))
    // .catch(err => res.status(400).json(err))

})

router.post('/add', async (req, res) => {
    if(!req.body) {
        return res.status(400).send('Missing req body')
    }
    
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        let customer = new CustomerModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            country: req.body.country,
            region: req.body.region,
            wallet: req.body.wallet,
            password: hashedPassword
        })
        let emailExists = await CustomerModel.findOne({ email: req.body.email })
        let passwordExists = await CustomerModel.findOne({ password: req.body.password})
        console.log(hashedPassword)

        if (emailExists && passwordExists) {
            console.log('Email AND password already exists')
            return res.status(400).json()
        } else if (emailExists) {
            console.log('Email already exists')
            return res.status(400).json()
        } else if (passwordExists) {
            console.log('Password already exists')
            return res.status(400).json()
        } else {
            customer.save()
            .then(() => res.json('customer added doe'))
            .catch(err => res.status(400).json(err))
            const accessToken = jwt.sign(customer.firstName, process.env.ACCESS_TOKEN_SECRET)
            res.json({ accessToken: accessToken})
        }
    } catch (err) {
        return console.error(err)
    }  
    
})

// another POST route for logging in 
// Build Node.js User Authentication - Password Login - Web dev simplified




router.put('/update', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Missing req body')
    }

    CustomerModel.findOneAndUpdate({
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        email: req.query.email,
        country: req.query.country,
        region: req.query.region,
        wallet: req.query.wallet,

    }, req.body, {
        new: true,
        upsert: true
    })
    .then(doc => res.json('Customer details updated: ', doc))
    .error(err => res.status(500).json(err))
})

router.delete('/remove', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Missing req body')
    }

        CustomerModel.findOneAndRemove(req.body)
        .then(() => res.json('Customer Removed'))
        .catch(err => res.status(500).json.err)
})

module.exports = router