const express = require('express')
// const getLoginUsers = express.Router()
const users = require('../Database/Scheme/loginSchema')
const moment = require("moment")
const TestSchema = require('../Database/Scheme/TestSchema')

// middleware that is specific to this router
// getLoginUsers.use((req, res, next) => {
//   console.log('Time: ', moment().format("DD-MM-YYYY HH:mm:ss"))
//   next()
// })

const getLoginUsers = async (req, res) => {
  let userLists = await users.find({ $and: [{ age: { $lt: 22 }, year: 2020 }] })
  if (userLists) {
    res.status(200).json({
      status: "Success",
      data: userLists
    })
  } else {
    res.send("No Data Found !!!")
  }
}

const mongooseTest = async (req, res) => {
  try {

    const user = new TestSchema({
      name: req.body.name,
      role: req.body.role,
      add: req.body.add,
    });

    await user.save()
    let met = {
      status: "success",
      message: "New User Created Successfully !!!",
    }
    res.send(met)

  } catch (err) {
    let met = {
      status: "Failure",
      message: err.message,
    }
    res.status(400)
    res.send(met)
  }
}
// how do we create , run a schedular in express js explain with example

const getMongooseTest = async (req, res) => {

  try {
    const person = await TestSchema.findOne({ 'add.city': 'Borivali (east)' }, 'role add.state');
    res.send(person)

  } catch (error) {
    let met = {
      status: "Failure",
      message: err.message,
    }
    res.status(400)
    res.send(met)
  }
}
// getLoginUsers.get('/', async (req, res) => {
//   // let userLists = await users.aggregate([{ $match: { age: { $gt: 22 } } }, { $addFields: { name: 1, "Sub Mila Ke": { $floor: { $add: ["$salary", "$sideHussle"] } } } }])
//   let userLists = await users.find({ $and: [{ age: { $lt: 22 }, year: 2020 }] })
//   if (userLists) {
//     res.status(200).json({
//       status: "Success",
//       data: userLists
//     })
//   } else {
//     res.send("No Data Found !!!")
//   }
// });

module.exports = { getLoginUsers, mongooseTest, getMongooseTest }