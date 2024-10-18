const express = require("express");
const dns = require("dns")
const fs = require('fs')
const app = express();
var cors = require('cors');
var os = require("os");
// app.use(cors())
// const user = require(user.json)
const port = 8080;
// const jsonData = require('../myapp/user.json');
// var data = fs.readFileSync('user.json');
// var myObject = JSON.parse(data);

console.log("hostName", os.hostname())
var hostName = os.hostname()
dns.lookup(hostName, (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});


app.use("/GetApi", function (req, res) {
  // console.log("ressss", res)
  // res.json();
  let gotWeather = {
    status: "success",
    message: "New User Created Successfully !!!",
  }
  res.send(gotWeather)
  // res.send(myObject)

  // res.on('finish', () => {
  //   fs.writeFileSync('logs.txt', myObject);
  // })

});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

