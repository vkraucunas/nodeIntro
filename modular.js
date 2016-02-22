
var filter = require('./modular2');


filter(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log("shit happens", err);
    } else {
        data.forEach(function(el) {
            console.log(el);
        });
    }
});