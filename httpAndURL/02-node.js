//create an http server and listen for requests. serve a file when a request is made

var http = require('http'),
    fs = require('fs');

//step2
var port = 8080;

//step3
//create server with http.createServer
var server = http.createServer(requestHandler);

//step4
//define function for handling request-response
function requestHandler (req, res) {
    fs.readFile('./03-node.js', 'utf8', function(err, data) {
        if(err){
            console.log(err);
        }
        res.statusCode = 235;
        res.setHeader("Content-Type", "application/json");
        res.end(data);
    });
}

//step5
//add listener / start server
server.listen(port); // if just port, won't know if there is an error
server.listen(port, function() {
    console.log('Hey your server is listening on http://localhost:', port);
});