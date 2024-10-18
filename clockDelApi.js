const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/ClockDelApi', (req, res) => {
    var resData = JSON.stringify(req.body);
    console.log("resData", resData)
    var readData = fs.readFileSync('user.json');
    console.log("readDAta", readData);
    var stringReadData = JSON.parse(readData);
    console.log("stringReadData", stringReadData);
    // var remove = stringReadData.filter((el) => (el !== resData));

    for (var i = 0; i < stringReadData.length; i++) {
        if(stringReadData[i] === resData) {
           var spliceData = stringReadData.splice(i, 1);
        }
    }


    console.log("spliceData", spliceData);
    stringReadData.push(spliceData)
    console.log("spliceDataStringReadData", stringReadData)
    var newData = JSON.stringify(stringReadData);

    fs.writeFile('user.json', newData, (err) => {
        console.log("err", err)
    })

    res.send("Data has been Removed Successfully !!!");
})

app.listen(8085, () => console.log("listening  successfully !!!"))