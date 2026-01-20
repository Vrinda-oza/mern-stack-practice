//function scope
/* 
function find()
{
    var age=20;
    console.log("my age is:",age);
}
find();
console.log(age); *///can't run this line because age variable is not accessible any vaariable like let,var,const in function scope 


//block scope

//var keyword is not block scope so we can use any where

//console.log(age);//value is not host in variable case. only variable declaration.

/* {
    var age=20;
    
    //let age=20;// error

    //const age=20;//error
    
}
console.log(age); *///it's work here


//Temploral_dead_zone concept


/* console.log(marks);//from this line to 
console.log("vrinda");
console.log("ozaa");//this line it's a temporal_dead zone that''s why it's show the error and we can't acess the value of the variable.
let marks=100;
console.log(marks);
 */


















//global scope var,let,const also use as a global scope
/* 
var age=20;
console.log(age);

function find()
{
    console.log(age);
}
find();

if(true){
    console.log(age);
}

for(let i=1;i<=5;i++)
{
    console.log(i,age);
} */
