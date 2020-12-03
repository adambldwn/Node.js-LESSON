var http = require("http");

http.createServer((request, response)=> {
    console.log("request url: ", request.url);
    if (request.url === "/") {
        response.end("Hello from homepage")
    }else {
        response.writeHead(404);
        response.end(http.STATUS_CODES[404]);
    }
}).listen(5000);