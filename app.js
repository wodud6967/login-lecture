"use strict"
// const http = require("http");
// const app = http.createServer((req, res)=>{
//     res.writeHead(200,{"Content-Type": "text/html; charset=utf-8 "});
//     if(req.url ==="/"){
//         res.end("여기는 루트입니다.")
//     }else if(req.url === "/login"){
//         res.end("여기는 로그인입니다.");
//     }
// });

// app.listen(3001, () =>{
//     console.log("http로 가동된 서버입니다.")
// })



// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

//router
const home = require("./routes/home");//우리가 만든 자바스크립트파일을 리콰이얼해서 볼러온다

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");



app.use("/", home); //use => 미들웨어어를 등록해주는 메서드

module.exports = app;