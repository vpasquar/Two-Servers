//
var http = require("http");


// 
function handleRequestNice(request, response) {

  // 
  response.end("It Works!! Path Hit: ");
}

function handleRequestBad(request, response) {

  // 
  response.end("You Stink ");
}
// 
var server = http.createServer(handleRequestNice);

// 
server.listen(7000, function() {

  //
  console.log("Server listening on: http://localhost:" + 7000);
});

var server2 = http.createServer(handleRequestBad);

server2.listen(7500, function() {
  console.log("server listening on: http://localhost:" + 7500);
});