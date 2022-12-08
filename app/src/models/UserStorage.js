"use strict"

const db = require("../config/db");

class UserStorage{
    
    //변수를 은닉화 숨긴처리를 해줘야한다 다른 외부데이터에서 값을 바꾸는 상화을 막기위해서
    

    static getUserInfo(id){
      return new Promise((resolve, reject) =>{
        const query ="SELECT * FROM USERS WHERE id = ?;";
          db.query(query, [id], (err, data) =>{
          if(err) reject(`${err}`);
          console.log(data);
          resolve(data[0]);
        });
      });  
    }

   

    static async save(userinfo){
      return new Promise((resolve, reject) =>{
        const query ="INSERT INTO USERS(id, name, psword) VALUES(?, ?, ?);";
          db.query(query, [userinfo.id, userinfo.name, userinfo.psword], (err) =>{
          if(err) reject(`${err}`);//문자열로 바꿔서 안바꾸면 오브젝트로 반환한다.
          resolve({success: true});
        });
      });  
    }
}

module.exports = UserStorage;