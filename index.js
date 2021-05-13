const express = require('express');
const path = require('path');
//const allroutes = require('./routes/allroutes');
const { conn } = require("./db/init_db");

  const app = express();


app.use(function(req, res, next) {
  req.con = conn
  next()
});

  app.use(express.urlencoded({extended: false
  }));
//serve static files
  app.use(express.static(path.join(__dirname ,'public')));

  //Template engine
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");

  //routers
  //app.use('/',allroutes);

  //errors
  app.use((req,res,next) => {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
  });

  //handling errors
  app.use((re,res,next) => {
    res.status = (err.status || 500);
    res.send(err.message);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT);

module.exports = app;

