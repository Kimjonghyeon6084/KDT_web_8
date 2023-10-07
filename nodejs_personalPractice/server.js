const express = require('express');
const userRouter = require('./Router/userRouter')

const app = express();
const PORT = 8000;

app.use(express.static(__dirname + '/public'));
app.use('/user,', userRouter);

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/news', (req,res) => {
  res.send('오늘의뉴스')
})

app.get('/shop', (req,res) => {
  res.send('쇼핑페이지입니다.')
})

app.get('/about', (req,res) => {
  res.sendFile(__dirname + '/about.html')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 서버 실행중`);
});