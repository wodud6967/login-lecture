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
//os 운영시스템에 등록되는 변수라서 환경변수라고 한다.
const dotenv = require("dotenv");
//const morgan = require('morgan');
const fs = require('fs');

const app = express();
dotenv.config();



//라우팅
//const accessLogStream = require("./src/config/log");
const home = require("./src/routes/home");//우리가 만든 자바스크립트파일을 리콰이얼해서 볼러온다
//const logger = require("./src/config/logger");
// logger.error("강재영짱짱");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname+'/src/public'));

//모겐 로그 모듈
// app.use(morgan("dev"));
// app.use(morgan('common', {stream: accessLogStream}));

// console.log("이거"+__dirname);

//url를 통해 전달되는 데이터에 한글, 공빅 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결


app.use("/", home); //use => 미들웨어어를 등록해주는 메서드

module.exports = app;

console.log("app이 먼저다");