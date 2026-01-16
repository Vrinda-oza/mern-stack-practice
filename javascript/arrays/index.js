/*  let obj = {
    Name: "vrinda",
    "full name": "oza vrinda",
    age: 22,
    weight: 75,
    greet: function(){
        console.log("hello");

    }
    
}; */
 
/* for(let key in obj)
{
    console.log(key," ", obj[key]);

} */


/* 
console.log(obj);
obj.greet();

console.log(typeof(obj)); */

//let obj2=obj;


//=======================================================================
        //Arrays

/* let arr=[1,2,3,4,5,6];

//array constructor

let brr=new Array('vrinda',2412,true);
brr.push('oza');//insert at end
brr.pop();//remove last item

brr.shift();//remove the first value
brr.unshift('vrinda');//add the value on the left most side

brr.push(20,40,70);
 */
//console.log(brr.slice(2,4));
/* new part it's exclude the last value in do the part of the array
start with the 2nd index nd end with the 4th exclude the 4th
 */

//brr.splice(1,2,'vriza');//content change insert,replace,remove in any place
//brr.splice(1,0,'vriza');//here nothing is removeand insert a value
//console.log(brr);
// console.log(typeof(brr));//check the type

// console.log(brr[0]);


//MAP function used for creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.

//let arr=[10,20,30];

/* let ansArray=arr.map((number)=>{
    return number+1;
}) */

/* arr.map((number,index)=>{
    console.log(number);
    console.log(index);
    
}) */

/* let ansArray= arr.map((number)=> {
    return number*number;
}) */
//console.log(ansArray);



//==============================================================

    //filter
// let arr=[10,11,20,30,40,31,47,56];
// let ansarr=arr.filter((number)=>{
//     return number%2===0;
//     // /* if(number%2===0)
//     // {
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // } */
// })
// console.log(ansarr);



/* 
let arr=[10,20,30,'vrinda','oza'];
let ans=arr.filter((value)=>{
    if(typeof(value)=== 'number'){
        return true;
    }
    else{
        return false;
    }
});

console.log(ans); */



//reduce

/* let arr=[10,20,30,40];
let ans=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(ans);
 */

// 0=10,1=20,2=30,3=40
//acc=0,curr=10 -> acc+curr(0+10)=10

//acc=10,curr=20 -> acc+curr(10+20)=30

//acc=30,curr=30 -> acc+curr(30+30)=60

//acc=60,curr=40 -> acc+curr(60+40)=100

//acc=100 that's why ans=100



//sort

// let arr=[1,8,7,4,2,5];
// //arr.sort();//sorting in ascending order
// //arr.reverse();//sorting in descending order
// console.log(arr);
// console.log(arr.indexOf(4));//find the index number of value





//for_each,for_in,for_of


/* let arr=[10,20,30,40];

let length=arr.length;
console.log("length:",length);

//traditional loop

for(let index=0;index<length;index++)
{
    console.log(arr[index]);

}

arr.forEach((value,index)=>{
    console.log("Number:",value,"index:",index);

}) */


/* let arr=[10,20,30,40];

for(let value of arr){
    console.log(value);

} */

/* let fullname = 'vrindaoza';
for(let val of fullname){
    console.log(val);

} */


//======================================================================
        //Arrays with function

let arr=[10,20,30,40];


//let getsum=function(arr)
//let getsum=(arr)=>
function getsum(arr)

{
    /* let len=arr.length;
    let sum=0;

    for(let index=0;index<len;index++)
    {
        sum=sum+arr[index];
    }
    return sum; */

    
    let sum=0;
    arr.forEach((value) => {
        sum=sum+value;
        
    });
    return sum;
}
let totalsum=getsum(arr);
console.log(totalsum);