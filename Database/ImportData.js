const fs = require("fs");
const jsonData = require("../data.json");


var data = fs.readFileSync(jsonData);
var myObject = JSON.parse(data[0]);
console.log("delete data", myObject)
