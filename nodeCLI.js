var fs = require('fs');
var prompt = require ('prompt');

// prompt.start();

// prompt.get(['file'], function (err, result) {
//     console.log('fuck this shit');
//     console.log(result.file);
//     fs.stat(result.file, function(err, stats) {
//         console.log(stats.size);
//     });
// });

prompt.start();

prompt.get(['file', 'outputFile'], function (err, result) {
    console.log('fuck this shit');

    console.log(result.file);
    fs.stat(result.file, function(err, stats) {
        saveToFile(result.outputFile, stats)
    });

    function saveToFile(fileName, stats){
        var a = stats.size;
        var b = result.file;
        var c = stats.mode;
        var d = stats.mtime;

        var string = (a+' '+b+' '+c+' '+d).toString();

        fs.writeFile(fileName, string, function(err) {
            if (err) {
                return console.log("that sucks");
            }

            console.log("whatever");
        });
    }
})


