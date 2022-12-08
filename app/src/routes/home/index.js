//mvc에서 c 컨트롤러 분리했음
"use strict"
// const db = require("../../config/db");
// db.query("SELECT * FROM USERS", (err, data) =>{
//     console.log("dddddd");
//     console.log(data);
//   });
const express = require("express");
const router = express.Router();

//컨트롤러
const ctrl = require("./home.ctrl");


router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; // 외부파일에서 사용할 수 있도록 던져준다.