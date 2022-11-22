"use strict"

//헬로라는 컨트롤러 함수를 만들어주고 이를 외부에서 사용한다.

const hello = (req, res)=>{
    res.render("home/index");
}
const login = (req, res)=>{
    res.render("home/login");
}


//오브젝트로 뺴준다 키와 벨류 여기서는 벨류가 없으니까 키와 똑같은 hello, hello로 저장
module.exports ={
    hello,
    login,
};