const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req,res) => {
  res.render('signup');
};

exports.post_signup = (req,res) => {
  //model
  User.post_signup(req.body, () => {
    req.send({result: true});
  });
};

exports.signin = (req,res) => {
    res.render('signin')
};

exports.post_signin = (req,res) => {

};