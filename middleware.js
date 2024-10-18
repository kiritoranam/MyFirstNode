const express = require('express')
const middleware = express.Router()
// const router = express()

// router.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
// })

// middleware.get('/user/:id', (req, res, next) => {
//     res.send(req.params.id)

// })

middleware.get('/user/:id', (req, res, next) => {
    console.log('ID:', req.params.id)
    next()
}, (req, res, next) => {

    if (req.params.id === "vishal") next('route')
    else
        res.send('User Info');
})

// handler for the /user/:id path, which prints the user ID
middleware.get('/user/:id', (req, res, next) => {
    res.send(req.params.id)
})

middleware.get('/userRoute/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
}, (req, res, next) => {
    // send a regular response
    res.send('regular')
})

// handler for the /user/:id path, which sends a special response
middleware.get('/userRoute/:id', (req, res, next) => {
    res.send('special')
})

function loginUrl(req, res, next) {
    console.log("Request URL:-", req.originalUrl);
    next()
}

function loginMethod(req, res, next) {
    console.log("Request Method:-", req.method);
    next()
}

middleware.get('/urlDetails', [loginUrl, loginMethod], (req, res) => {
    res.send('Url Details');
})


module.exports = middleware