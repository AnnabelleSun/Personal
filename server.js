const http = require('http');
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

http.createServer(function (request, response) {
    if (request.headers['accept-encoding'] && request.headers['accept-encoding'].indexOf('gzip') !== -1) {
        // var ws = fs.createReadStream();
        // var rs = fs.createWriteStream();
        // rs.pipe(ws);
        response.write(fs.readFileSync('./file.html'));
    } else {
        response.write(fs.readFileSync('./file.html'));
    }
    response.end();
}).listen(9090, function () {
    console.log('listen 9090 ...');
});