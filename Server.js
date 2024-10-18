const http = require("http");
const dns = require("dns");
const os = require("os");
const fs = require("fs")

var data = fs.readFileSync('user.json');
var myObject = JSON.parse(data);


const NightFurry = http.createServer((req, res) => {

    if (req.url === "/") {

        console.log("hostName", os.hostname())
        var hostName = os.hostname()
        dns.lookup(hostName, (err, address, family) => {
            console.log('address: %j family: IPv%s', address, family);
        });

        res.end("hello 8A Wessels Rivonia Boulevard")

    } else if (req.url === "/Contact") {
        console.log("reqUrl", req.url)

        res.end("Welcome to Contact Page..");
    } else if (req.url === "/GetApi") {

        res.end(myObject)

    }
    else if (req.url) {
        res.writeHead(404, { "content-type": "text/html" }, "Method Not Found");
        res.end("No such page Found..")
    }
});

NightFurry.listen(8080, "192.168.4.97", () => {
    console.log("Night Furry is fastest Dragon....");
}); 