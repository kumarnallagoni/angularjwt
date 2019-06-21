// var express = require('express');
// var app = express();
//
//
//
// app.use(function(req,res,next){
//
//      if(true){
//        next()
//      }
//
// })
//
//
//
// app.get('/testcall', (req,res,next)=>{
//
//      setTimeout(function () {
//
//        console.log("execution 1");
//
//      },3000)
//    next();
// })
//
// app.get('/testcall', (req,res,next)=>{
//
//   console.log("execution 2");
// })


var isAuthenticated = function (req, res, next) {

  console.log("vinod your in authentication callback module")

  next();
}

module.exports = isAuthenticated;
