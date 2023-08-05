const Visitor = require("../model/visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });
  // };

  //mysql 연결후
  Visitor.getVisitors((result) => {
    console.log("Cvisitor : ", result);
    // [ {}, {}, {}] 이런 형식으로 result 값이 넘어온다.
    res.render("visitor", { data: result });
  });
};
