var promise= new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        reject({message: 'fail'})

    },1000)

})
//console.log(promise)

promise
.then((data)=>{
   console.log(data);
})
.catch((error)=>{
    console.log("error",error)
});