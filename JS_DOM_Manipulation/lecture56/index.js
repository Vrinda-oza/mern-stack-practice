//promise
//two stage of promise is  1]resolve/fullfilled,2]reject

/* let firstpromise = new Promise((rsolve,reject)=>{
console.log("vrinda");
//resolve(1001);
reject(new Error("Internal server error"));
});
 */


/* let firstpromise = new Promise((resolve,reject)=>{
    setTimeout(function saymyname(){
    console.log("my name is vrinda oza");
},10000);
return 1;
});
 */

// like the after the promise fullfilled i want to perform the task so we are use the then()
//like the after the promise will be filure or reject so we are use the catch() so error will be  catch

/* let promise1 = new Promise((resolve, reject)=>{
    let success= false;
    if(success){
        //resolve("promise fullfilled");
          resolve(10);
    }
    else{
        reject("internal server error");
    }
});

promise1.then((message)=>{
    console.log("first"+ message);
    //return "promise fulfilled second message";
      return 20;
}).then((message)=>{
    console.log("second"+message);
    //return "promise fulfilled third message";
      return 30;
}).then ((message)=>{
    console.log("third"+message);
    
}).catch((error)=>{
    console.error(error);
}).finally((message)=>{
    console.log("this is the finally block ");
})
 */

/* promise1.then((message)=>{
    console.log("the message of the then "+message);
}).catch((error)=>{
    console.log("error:"+error);
}) */


 let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
 })
 let promise2 = new  promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second")
 }) 

let promise3 = new  promise((resolve,reject)=>{
    setTimeout(resolve,4000,"third")
 }) 
 //when all the promise resolve then this promise execute if any of the promise fail this promise all also fail
 Promise.all([promise1,promise2,promise3])
 .then((values)=>{
    console.log(values);
 }).catch((error)=>{console.log("error"+error);})
