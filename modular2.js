var fs = require('fs');
var path = require('path');

var filter = function(dirName, extension, callback) {
    fs.readdir(dirName, function(err, list) {
        if (err) {
            return callback(err);
        } else {
            var responseArray = list.filter(function(dirName) {
                return path.extname(dirName) === "." +extension;
            });
            callback(null, responseArray);
        }
    });
};



module.exports = filter;