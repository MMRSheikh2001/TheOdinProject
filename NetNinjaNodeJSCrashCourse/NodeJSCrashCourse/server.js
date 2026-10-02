
const http = require('http');
const _ = require('lodash');


const num=_.random(0,20);
console.log(num);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    let path = '/view';
 
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {

        case "/":
            res.write('<h1>Hello World</h1>');
            res.statusCode = 200;

            break;
        case "/die":
            res.write('<h2>I am gonna die</hF2>');
            res.statusCode = 205;
            break;
        case "/kill":

            res.statusCode = 301;
            res.setHeader('Location', '/die');
            break;

        default:
            res.statusCode = 404;
            break;
    }

    //set header content type

    //    res.write('<h1>Hello World</h1>');

    res.end();


});
server.listen(3000, 'localhost', () => {
    console.log("Listening for request on port 3000");
})