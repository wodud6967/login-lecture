"use strict"

const User = require("../../models/User");

// const UserStorage = require("../../models/UserStorage");


//헬로라는 컨트롤러 함수를 만들어주고 이를 외부에서 사용한다.
const output = {
     home: (req, res)=>{
        res.render("home/index");
    },
     login: (req, res)=>{
        res.render("home/login");
    },
}



const process = {
  
    login: (req, res) => {
        //req는 포론트엔드에서 전달한 리퀘스트 요청을 데이터를 담아둔 변수이다
        
        // const id = req.body.id;
        // const psword = req.body.psword;

        

        // const users = UserStorage.getUser("id","psword"); 
        // const response = {};
     
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx]===psword){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        //  response.success = false;
        //  response.msg = "로그인에 실패하셨습니다";
        //  return res.json(response);

        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
   }
}


//오브젝트로 뺴준다 키와 벨류 여기서는 벨류가 없으니까 키와 똑같은 hello, hello로 저장
module.exports ={
   output,
   process
};