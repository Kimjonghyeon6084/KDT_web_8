const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.index = (req, res) => {
  res.render("index");
};
exports.get_register = (req, res) => {
  res.render("register");
};
exports.get_login = (req, res) => {
  res.render("login");
};

// 회원가입
exports.register = async (req, res) => {
  try {
    const { userId, pw, name } = req.body;
    const hashPw = bcryptPassword(pw);
    const result = await User.create({
      userId,
      name,
      pw: hashPw,
    });
    if (result) {
      res.json({ result: true });
    }
  } catch (error) {
    console.log(error);
  }
};


//로그인
exports.login = async (req, res) => {
    try {
      const { userId, pw } = req.body;
      // 사용자 조회
      const result = await User.findOne({
        where: {userId}
      })
      const hashPw = bcryptPassword(pw);
      
      if (!result) {
        res.json({ result: true });
      }
    } catch (error) {
      console.log(error);
    }

const bcryptPassword = (pw) => {
  return bcrypt.hashSync(pw, 10);
};
const comparePassword = (pw, dbPw) => {
    return bcrypt.compareSync(pw, dbPw);
  };