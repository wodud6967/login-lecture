"use strict"

class UserStorage{
    //변수를 은닉화 숨긴처리를 해줘야한다 다른 외부데이터에서 값을 바꾸는 상화을 막기위해서
     static #users = {
        id: ["wodud", "kang", "wodud6967"],
        psword: ["123", "123", "123"],
        name: ["강재영", "진선우", "강재"],
    };
    static getUser(...field){
        const users =this.#users;
        const newUsers = field.reduce((newUsers, field) =>{
           if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
           }
           return newUsers;
        },{});
       
        return newUsers;
    }
}

module.exports = UserStorage;