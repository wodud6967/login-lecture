"use strict"

const fs= require("fs").promises;

class UserStorage{
    //변수를 은닉화 숨긴처리를 해줘야한다 다른 외부데이터에서 값을 바꾸는 상화을 막기위해서
     
    static getUser(...field){
        // const users =this.#users;
        const newUsers = field.reduce((newUsers, field) =>{
           if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
           }
           return newUsers;
        },{});
       
        return newUsers;
    }
    static getUserInfo(id){
      return fs
      .readFile("./src/databases/user.json")  
      .then((data) =>{
        return this.#getUserInfo(data, id)
      })
      .catch((err) => console.error(err))
    }

    static #getUserInfo(data, id){
      const user = JSON.parse(data);
      const idx = user.id.indexOf(id);
      const userKeys = Object.keys(user); // =>[id, psword, name] 
      const userInfo = userKeys.reduce((newUser, info) =>{
            newUser[info] = user[info][idx];
            return newUser;
      }, {});
        return userInfo;
    }

    static save(userinfo){
        // const user = this.#users;
        user.id.push(userinfo.id);
        user.psword.push(userinfo.psword);
        user.name.push(userinfo.name);
        
        return{success: true};
    }
}

module.exports = UserStorage;