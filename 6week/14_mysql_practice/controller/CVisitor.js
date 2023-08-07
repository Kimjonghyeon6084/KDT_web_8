const Visitor = require("../model/MVisitor");

// 전체 방명록 조회
exports.getVisitor = (req, res) => {
  Visitor.getVisitors((result) => {
    res.render("visitor", { data: result });
  });
};

//방명록 하나 조회
exports.getVisitor = (req, res) => {
  Visitor.getVisitor(req.query.id, (result) => {
    res.render("Visitor", { data: result });
  });
};

//방명록 하나 추가
exports.postVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (result) => {
    res.send({
      result: true,
      id: rows.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};
//방명록 하나 수정
exports.patchVisitor = (req, res) => {
  Visitor.patchVisitor(req.body, () => {
    res.send({ result: true });
  });
};
//방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.deleteVisitor =
    (req.body,
    () => {
      res.send({ result: true });
    });
};