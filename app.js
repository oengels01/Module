http.createServer(function(req, res){

res.writeHead(200);
res.write("Great coding in Node!");
res.write(module3.printAccount + module3.randomIntroUSD(100, 1000000));

}).listen(8000);
