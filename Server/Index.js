var express = require("express");
var path=require("path");
var app = express();
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), function(){
    console.log("Server started on port" + app.get("port"));
});