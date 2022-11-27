//mvc에서 c 컨트롤러 분리했음
"use strict"
const express = require("express");
const router = express.Router();

//컨트롤러
const ctrl = require("./home.ctrl");


router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router; // 외부파일에서 사용할 수 있도록 던져준다.