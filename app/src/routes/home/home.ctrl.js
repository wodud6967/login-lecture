"use strict"

//헬로라는 컨트롤러 함수를 만들어주고 이를 외부에서 사용한다.
const output = {
     home: (req, res)=>{
        res.render("home/index");
    },
     login: (req, res)=>{
        res.render("home/login");
    },
}

const users = {
    id: ["wodud", "kang", "wodud6967"],
    psword: ["123", "123", "123"],
};

const process = {
  
    login: (req, res) => {
        //req는 포론트엔드에서 전달한 리퀘스트 요청을 데이터를 담아둔 변수이다
        
        const id = req.body.id;
        const psword = req.body.psword;
     
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        });
   }
}


//오브젝트로 뺴준다 키와 벨류 여기서는 벨류가 없으니까 키와 똑같은 hello, hello로 저장
module.exports ={
   output,
   process
};