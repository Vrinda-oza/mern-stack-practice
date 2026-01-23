//compile time error

//systax error

//console.log(1;


//Runtime error

//Reference error

//console.log(x);


try{

    console.log("try block starts here");
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