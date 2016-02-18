var http = require('http'),
    fs = require('fs'),
    readline = require('readline');
// var prompt = require ('prompt');
var file = '';


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give me a filename ', function(filename) {
  file = filename;
  rl.close();
  step2(filename);
});


//step2
function step2(file) {
  var port = 8080;

  //step3
  //create server with http.createServer
  var server = http.createServer(requestHandler);

  //step4
  //define function for handling request-response
  function requestHandler (req, res) {
      fs.readFile(file, 'utf8', function(err, data) {
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
};




