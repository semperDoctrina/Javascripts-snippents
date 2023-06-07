const { reject } = require("async");
const { resolve } = require("path");

var promise= new promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({message:'sucess'});
    },3000);
})