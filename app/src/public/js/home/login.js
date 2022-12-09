"use strict";



const id = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      loginbtn = document.querySelector("#button");

loginbtn.addEventListener("click", login);

function login(){
    if(!id.value) return alert("아이뒤를 입력해주십시오.")
    if(!psword.value) alert("비밀번호를 입력해주십시오.");
    
    const req = {
        id : id.value,
        psword : psword.value,

    };
  
    
    fetch("/login", {
        
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href ="/";
        }else{
            if(res.err) return alert(res.err)
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("로그인중 에러발생"));
    })
}

