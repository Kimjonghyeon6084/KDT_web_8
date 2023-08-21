const express = require("express");
const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/",
});

const uploadFileDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //destinati: 경로 설정
      done(null, "uploads/");
    },
    filename(req, file, done) {
      //가정) ~~.png한 파일을 업로드
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views")); //__dirname : 절대경로를 의미
app.use("/uploads", express.static(__dirname + "/uploads")); //__dirname : 절대경로를 의미

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

//싱글 파일 업로드
app.post("/upload/", uploadFileDetail.single("userFile"), (req, res) => {
  console.log(req.file); // req.file: 파일 업로드 성공 결과를 나타냄(파일 정보)
  console.log(req.body); // req.body: title 데이터 정보 확인 가능
  res.send("Upload!!");
});
//여러 파일 업로드
app.post("/upload/array", uploadFileDetail.array("userFile"), (req, res) => {
  console.log(req.files); // req.file: 파일 업로드 성공 결과를 나타냄(파일 정보)
  console.log(req.body); // req.body: title 데이터 정보 확인 가능
  res.send("Upload!!");
});
//여러 파일 업로드2
app.post(
  "/upload/fields",
  uploadFileDetail.fields([{ name: "userFile1" }, { name: "userFile2" }]),
  (req, res) => {
    console.log(req.files); // req.file: 파일 업로드 성공 결과를 나타냄(파일 정보)
    console.log(req.body); // req.body: title 데이터 정보 확인 가능
    res.send("multiple file Upload!!");
  }
);
app.post(
  "/dynamicFile",
  uploadFileDetail.single("dynamic_userFile"), // 이름 맞춰주기 !
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
