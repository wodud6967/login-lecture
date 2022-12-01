"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
       
    }
    login() {
       const client = this.body;
       console.log("바디값: " + client.id);
       const{id, psword} = UserStorage.getUserInfo(client.id);
       console.log(id, psword);

      if(id){
        if(id === client.id && psword === client.psword){
            return {success: true}
           }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
      }
            return{success: false, msg: "존재하지 않는 아이디입니다."};
    }
    register(){
        const client = this.body;
        const response = UserStorage.save(this.body);
        return response;
    }

}
module.exports = User;