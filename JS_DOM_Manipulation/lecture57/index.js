//Async-await

//async-await means we can describe the asynchronous code to synchronous code that means using the async-await we can let the asynchronous to working like a synchronous code behaviour (squancially)

//async-await use for the handle the multiple promises

//async function always return the promise
// async function getdata() {
//     setTimeout(function(){
//         console.log("hello i am inside set time out block");
//     },3000);

    
// }
// let output=getdata();

// //await-?

// //fetch API

// async function getdata(){

//     //get request-async
//     let response=await fetch('https://jsonplaceholder.typicode.com/posts');
//     //parse json-sync
//     let data=await response.json();
//     console.log(data);
// }
// getdata();
// //scenario:
// // prepare url/api endpoint->sync
// //await //fetch data->network call->async
// //process data->sync




const myheaders=new Headers();
myheaders.append("Content-Type","application/json");

const url="https://jsonplaceholder.typicode.com/posts";

const option={
    method:"POST",
    body:JSON.stringify({username:"vrinda oza"}),
    headers:myheaders,
};

async function getdata()
{
    const url="https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response:",data);
}
async function postdata(){
    const response = await fetch('https://dummyjson.com/posts/add',{
       method:'POST',
       headers:{'Content-Type':'application/json' } ,
       body:JSON.stringify({
        title:'vrinda oza->i am in love with somone',
        userid:5,
       })
    })
    let data = await response.json();
    console.log("post data response:",data);
}
async function processdata(){
    await postdata();
    await getdata();
}
getdata();
postdata();
