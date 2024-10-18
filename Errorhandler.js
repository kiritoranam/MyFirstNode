const express = require('express');
const errorHandler = express.Router();
const file = require('./data.json')
const fs = require('fs')

errorHandler.get('/', [
    function (req, res, next) {
        console.log("writing..");
        fs.writeFile('/inaccessible-path', 'data', next)
    },
    function (req, res) {
        res.send('OK')
    }
])

errorHandler.get('/error', (req, res, next) => {
    setTimeout(() => {
        try {
            throw new Error('BROKEN')
        } catch (err) {
            next(err)
        }
    }, 100)
}, (req, res) => {
    res.send('Noo error has been catched..')
})

errorHandler.get('/readFile', [
    function (req, res, next) {
        fs.readFile(file, 'utf-8', (err, data) => {
            res.locals.data = data
            next(err)
        })
    },
    function (req, res) {
        res.locals.data = res.locals.data.split(',')[1]
        res.send(res.locals.data)
    }
])


module.exports = errorHandler;