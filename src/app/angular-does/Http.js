//1
const http=require('http');
//2 create server
const server=http.createServer();
//3 on
server.on('connection',(socket)=>{
    console.log('new connection');
});

