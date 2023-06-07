

var promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({ message:'sucess/ss'});
    },1000);
    reject({message:'failed'})
});
// promise.then((data)=>{
//     console.log(data)
// })