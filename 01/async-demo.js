fs=require('fs')

function listData(err,data){
   console.log("data",data);
}

fs.readdir("c:/",listData)

console.log("this comes after")

//to run file enter node async-demo.js

