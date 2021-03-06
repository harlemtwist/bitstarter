var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

  var idxbuf = fs.readFileSync("index.html");
  response.send(idxbuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
