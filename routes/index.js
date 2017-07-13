var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var salt = 10;
var userModel = require('../database/userModel.js');
router.get('/', function(req, res, next) {
  if(req.session.name === undefined){
    req.session.name = null;
  }
  res.render('index', {title: '问答',name: req.session.name});
});


router.get("/logout",function(req,res){
	req.session.name = null;
	res.redirect("/");
});

module.exports = router;
