"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger")

// const UserStorage = require("../../models/UserStorage");


//헬로라는 컨트롤러 함수를 만들어주고 이를 외부에서 사용한다.
const output = {
     home: (req, res)=>{
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
    },
     login: (req, res)=>{
        logger.info(`GET /login 200 "로그인 화면으로 이동"`); 
        res.render("home/login");
    },
     register: (req, res)=> {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`); 
        res.render("home/register");
     }
}



const process = {
  
    login: async(req, res) => {
      
        const user = new User(req.body);
        const response = await user.login();
        if(response.err)
         logger.error(`POST /login 200 Response: "success: ${response.success}, ${response.err}"`
         );
        else
         logger.info(`POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
         );
        return res.json(response);
        
   },
   register: async(req, res) =>{
        const user = new User(req.body);
        const response =  await user.register();
        if(response.err)
         logger.error(`POST /login 200 register: "success: ${response.success}, ${response.err}"`
         );
        else
         logger.info(`POST /login 200 register: "success: ${response.success}, msg: ${response.msg}"`
         );
        return res.json(response);
        
   }
}


//오브젝트로 뺴준다 키와 벨류 여기서는 벨류가 없으니까 키와 똑같은 hello, hello로 저장
module.exports ={
   output,
   process
};