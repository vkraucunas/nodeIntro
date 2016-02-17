var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(filePath, function(err, list) {
    if (!err) {
        list.filter(function(fileName) {
            return path.extname(fileName) === extension;
        })
        .forEach(function(el) {
            console.log(el)
        });
    }
});


// var finalArray = [];

// var idk = fs.readdir(process.argv[2], function(err, list) {
//     if (!err) {
//         for (var i = 0; i < list.length; i++) {
//             if (path.extname(list[i]) === ".md") {
//                 finalArray.push(list[i]);
//             }
//         }
//         console.log(finalArray);
//     } else {
//         console.log('shit happens');
//     }
// });