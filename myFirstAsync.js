var fs = require('fs');

var str = fs.readFile(process.argv[2], function(err, response) {
    if (!err) {
        var numOfNewLines = response.toString().split('\n').length;
        console.log(numOfNewLines - 1);
   } else {
    console.log("shit happens");
   }
});





