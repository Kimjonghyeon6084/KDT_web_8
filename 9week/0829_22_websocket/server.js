//31:10부터 53:10
//54:15
//2:00:05부터 실습 시작
//2:24:28부터 //3;12;23 다시 시작
//3:19:20
const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

//http 서버 연결
const server = http.createServer(app);
//socket 서버
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('client')
})
app.get('/chat', (req,res) => {
  res.render('chat')
})

///////////////////소켓///////////////////

io.on('connection', (socket) => {
  console.log('id', socket.id);
  console.log('조인전', socket.rooms);
  
  
  console.log(socket);
  
  //실습2
  socket.on('join', (chatroom) => {
    
    socket.room = chatroom
    socket.join(chatroom)
    console.log('조인후', socket.rooms);
    //broadcast 포함시 나를 제외한 전체사용자에게 메세지 전달
    socket.broadcast.to(chatroom).emit('userjoin', chatroom)
});

socket.on('message', (message) => {
   //io.to(특정방).emit(이벤트) : 특정 방의 전체 사용자에게 메세지를 전달
    io.to(socket.room).emit('chat', `${message}`);
});

  //받는 것
  // socket.on('new_message', (arg, cb) => {
  //   console.log(arg.name, ":", arg.message);
  //   cb(arg);
  // });
  //실습1
  // socket.on('hello', (data) => {
  //   console.log(`${data.name} : ${data.message}`);
  //   socket.emit('cbHello', {name: 'server', message: '안녕하세요'})
  // })
  // socket.on('study', (data) => {
  //   console.log(`${data.name} : ${data.message}`);
  //   socket.emit('cbStudy', {name: 'server', message: '공부합시다'})
  // })
  // socket.on('bye', (data) => {
  //   console.log(`${data.name} : ${data.message}`);
  //   socket.emit('cbBye', {name: 'server', message: '잘가~'})
  // })
})

//서버오픈
server.listen(PORT, ()=> {
  console.log(`http://localhost:${PORT}`)
})