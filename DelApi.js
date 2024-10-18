const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const fs = require('fs');
const jsonData = require('../myapp/user.json');

var port = 8080 ;

app.get("/delApi", function (req, res) {
    var data = fs.readFileSync('user.json');
    var myObject = JSON.parse(data[0]);
    console.log("delete data", myObject)
    var arrObject = [myObject]
    var sp = arrObject.pop();
    console.log("sp", sp)

    var newData = JSON.stringify(sp);
    fs.writeFile('user.json', newData, err => {
      if (err) throw err;
      console.log("New data added");
    });

    res.on('finish', () => {
      fs.writeFile('logs.txt', res.data)
    })

});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));