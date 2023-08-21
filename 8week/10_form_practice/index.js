const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));

//view engine
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/getPage', (req,res) => {
    const {username, gender, birthYear, birthMonth, birthDay, hobby} = req.query;
    res.render('get');
})
app.get('/resultGet', (req,res) => {
    res.render('result', {title: 'GET방식 전송', userInfo: req.query})
})



app.get('/postPage', (req,res) => {
    const {username, gender, birthYear, birthMonth, birthDay, hobby} = req.body;
    res.render('post');
})
app.post('/resultPost', (req,res) => {
    res.render('result', {title: 'POST방식 전송', userInfo: req.body})
})


//서버 연결
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})