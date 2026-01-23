//compile time error

//systax error

//console.log(1;


//Runtime error

//Reference error

//console.log(x);

/* 
try{

    console.log("try block starts here");
    //error-> reference 
    console.log(x); //here problem or error create so it's direct jump in the catch block 
    console.log("try block finish here");

    //a


    //b


    //c
}
catch(err){
    // here we are define the error handling mechanism what you want to do with the error
    //retry logic
    //fallback mechanism
    //custom error

    console.log("I am inside catch block");
    console.log("your error is here:",err);

}


//finally block // execute everytime

finally{
    console.log("I will run everytime , as i am finally block ");
}
 */


// we can create custom error using throw

/* try{

    console.log(x);
}
catch(e){
    throw new Error("firstly declare the variable")
    
}
 */
// let errorCode=100;
//     if(errorCode=100){
//     throw new Error("Invalid Json");
//     }