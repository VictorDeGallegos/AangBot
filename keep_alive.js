var http = require('http');

http.createServer(function(req,res){
    res.write("Sigo aqui mirrey");
    res.end();

}).listen(8080);

