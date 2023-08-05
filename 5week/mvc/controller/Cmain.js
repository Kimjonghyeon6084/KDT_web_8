const Comment = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
};
//댓글 목록
exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  console.log(req.params); //라우트 매개변수에 대한 정보 담겨 있음
  console.log(req.params.id); //id 고유 값

  const commentId = req.params.id; //댓글 id: url로 들어온 매개변수
  const comments = Comment.commentInfos();
  console.log(comments[commentId - 1]);

  //:id 변수에 숫자가 아닌 값이 올때의 404페이지
  if (isNaN(commentId)) return res.render("404");
  //숫자는 맞는데 존재하지 않는 댓글 id 접근시 404페이지

  if (commentId < 1 || commentId > comments.length) return res.render("404");
  res.render("comment", { commentInfo: comments[commentId - 1] });
};
