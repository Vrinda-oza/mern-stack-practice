// synchronous Command execute line by line it's generate the output at a time 
// ex: console.log("hello");-->it's execute and print hello like this is we write another it will print


//but in the ansynchronous there will be the output may be shows after the some time or may be it will not kind of it does not give the gureenty about the output

//blocking

// console.log("start");
// setTimeout(saymyname,5000);//it will take the few second then print the output 
// console.log("end");//here upper statement take the the time for generaate  the o/p and then after the some time this line output will be generate but the
// maine point  is that this line have to do the wait anddd this problem called the block because line line will be block in the asynchronous
// and the solution of this problem is called the event loop

//here use loup web site for the understand this theory

//synchronous code always execute first and then asynchronous code execute it will take the time because there are set the timer and asynchronous code wait in the callback queue and when the call stack empty then it will start the execution of asynchronous code  so it will prevent from the problem of the blocking 