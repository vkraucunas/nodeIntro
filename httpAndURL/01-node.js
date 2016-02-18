//create an http server and listen for requests. respond by echoing the path

//step1
var http = require('http');

//step2
var port = 8080;

//step3
//create server with http.createServer
var server = http.createServer(requestHandler);

//step4
//define function for handling request-response
function requestHandler (req, res) {
    res.end("Success");
}

//step5
//add listener / start server
//server.listen(port); // if just port, won't know if there is an error
server.listen(port, function() {
    console.log('Hey your server is listening on http://localhost:', port);
});