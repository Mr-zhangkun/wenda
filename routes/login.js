var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var salt = 10;
var userModel = require('../database/userModel.js');

router.get('/', function(req, res, next) {
  res.render('login', {title: '问答',name: ''});
});

router.post('/', (req, res) => {
  var uname = req.body.name;
  var upwd = req.body.password;
  userModel.findOne({name: uname}, (err, doc) => {
    if (err) {
      console.log(err);
    } else if (doc) {
      bcrypt.compare(upwd, doc.password, (err, hash) => {
        if(hash) {
          req.session.name = doc.nname;
          console.log(req.session.name);
          console.log('登陆成功');
          // res.redirect('/');
          res.render('index',{title:'问答', name: req.session.name})
        }else{
          res.send('密码不正确');
        }
      })
    } else {
      res.send('账号不存在');
    }
  });
})

module.exports = router;
