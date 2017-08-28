var express = require('express');
var app = express();
var path = require('path');
app.use('/', express.static(path.join(__dirname, '/')));
app.get("*", function(req,res){
  res.redirect("/error/404.html")
})
app.listen(8080);
