
//if we use function expression method use in the function hoisting it's not work it's show reference error


/* sayhello();
let sayhello=function()
{
    console.log("heyy");
}
 */



//const obj=new human();// it's hsow the error
/* class human{
    fname (name) {
        console.log(name);
        
    }
}

const obj=new human();
obj.fname("vrinda");
 */    

//it's work like a variable but  if we shift top then it's not work.


//{

//it's called a function hoisting because function shift on it's own current scope or we can say function defination automatic shift on top of current scope
//saymyname("vrinda");
/* function saymyname(name)
{
    console.log(name);
}
saymyname("vrinda");
}
 */

//variable hoisting


//it's show undefined not shoowing error bcz in the variable hoisting only declaration move on the tope not the value that's why it's show the undefind in the function it's shift the whole defination. in a let and const did not support variable hoisting it's show the error.that's why we have to always use let and const just firstly initial var and then declaration.


//var age = 25;
// console.log(age);
// var age = 25;


/* function greetme(greet,name){

    console.log("hello",name);
    greet();

}
function greet()
{
    console.log("greeting for the day");
}
greetme(greet,"vrindaaa");
 */


/* function solve(number)
{
    return function(number)
    {
        return number*number;
    }
}
let ans= solve(5);//ans become a function after solve return inner function
let fans=ans(10);

console.log(fans);
 */



/* const arr=[
    function(a,b){
        return a+b;

    },

    function(a,b){
        return a-b;

    },
    function(a,b){
        return a-b;

    }
    
    
]
let first=arr[0];
let ans = first(5,10);
console.log(ans);
 */


let obj = {
    age:20,
    wt:60,
    ht:180,
    greet:()=>{
        console.log("heneheyee ehey");
    }


}

console.log(obj.age);
obj.greet();