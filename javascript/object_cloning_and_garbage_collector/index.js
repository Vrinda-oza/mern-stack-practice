//object has a dynamic nature that means we can add the value in object on runtime we can change the defination of the object.

/* let obj={
    age:20,
    wt:70,
    ht:180
};
console.log(obj);


obj.color="green";
console.log(obj);
 */

// in a cloning we are not give the reference of the any one variable to another variable like if address of a = 1000 and value =10 and also variable b add=1002 value = 10 so in the cloning we are not give the reference like add of a and b both have the same address=1000 this is called  giving the reference. 


//Types of cloning

/* //spred operator ... 

 let src={
    age:20,
    wt:70,
    ht:180
};

let dest={...src};

//let dest=src;      //if we are doing this it's give the reference of the src to dest  

src.age=90;      //here we change the value of source variable age value so we can identify and know the both are store on the different address

console.log("source:",src);

console.log("destination:",dest);     // avalue of the age variable not change.
 */


//Assign method 

/* 
 let src={
    age:20,
    wt:70,
    ht:180
};

let src2={
    value:101,
    name:"vrinda"
}

let dest =Object.assign({}, src,src2);

src.age=90;

console.log("source:",src);

console.log("destination:",dest);
 */


/* 
//iteration method

 let src={
    age:20,
    wt:70,
    ht:180
};

let dest={};

for(let key in src){

    let newKey=key;
    let newValue=src[key];

    //insert newkey and value in dest and create a clone
    dest[newKey]=newValue;
}
src.age=90;
console.log("source:",src);

console.log("destination:",dest);

 */

//Garbage Collector
/* 
Garbage collection is an automatic memory management process that identifies and deallocates memory occupied by objects that are no longer needed by the program. In JavaScript, this process is performed by the runtime environment, typically a web browser or Node.js, rather than the programmer manually freeing memory.

So, the best part of using JavaScript is that you don't have to worry about the deallocation of unused memory manually. JavaScript handles it on its own, and this is one of the coolest features of JavaScript. */