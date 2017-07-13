
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var salt = 10;
var userModel = require('../database/userModel.js');
router.get('/', function(req, res, next) {
  res.render('find', {title: '问答',name: ''});
});


router.post('/', (req, res) => {
  var uname = req.body.name;
  var upwd = req.body.password;
  bcrypt.hash(upwd, salt, (err, hash) => {
    userModel.update({'name': uname}, {$set: {'password': hash}}, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('修改成功');
        res.redirect('/login');
      }
    })
  })
})













module.exports = router;
