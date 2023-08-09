const express = require("express");
const router = express.Router();
const controller = require("../controller/CVisitor");

//router
// /get, /post /patch, /delete 던
// domain/visitor 하나로 위에 4개 다 가능
// /use를 쓰면 중복 불가(젤 위에 것만 인식)

//방명록 전체 보이기
//localhost:8000/visitor
router.get("/", controller.getVisitor);
//방명록 하나 조회
//localhost:8000/visitor/get
router.get("/get", controller.getVisitor);
//방명록 하나 추가
router.post("/write", controller.postVisitor);

//방명록 하나 수정
router.patch("/edit", controller.patchVisitor);
//방명록 하나 삭제
router.delete("/delete", controller.deleteVisitor);

module.exports = router;
