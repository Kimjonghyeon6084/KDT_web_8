const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

//GET//localhost:8000/user/
router.get("/", controller.index);
//GET//localhost:8000/signup/
router.get("/signup");
//POST //localhost:8000/signup/
router.post("/signup", controller.post_signup);

router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);


router.post("/profile");

router.post("/profile");
router.update("/prfile/edit");
router.delete("/profile/delete");


module.exports = router