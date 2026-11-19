const express = require('express');
const app = express();
const port = 3000;

//any middleware using app is called the application-level middleware
//express.json is a built in middleware

//middleware order is matter in the application in application-level middleware .we have to write the middleware before the route handler

//order is more matter in the middleware
//loading middleware into the app
//inbuilt middleware


//middleware - logging,auth,validation

//creation of a middleware

// app.use(express.json());

// const loggingMeddleware = function(req,res,next){
//     console.log("logged")
//     next();

// }
// //loading middleware into application

// const authMeddleware = function(req,res,next){
//     console.log("auth")
//     //if we write the response so from now here request response cycle end here
//     res.send("return to home");
//     //next();

// }


// const validationMeddleware = function(req,res,next){
//     console.log("validation")
//     next();

// }

// app.use(loggingMeddleware);

// app.use(authMeddleware);

// app.use(validationMeddleware);

const route = require ('./Routes/routes.js');
//mounting the routes

app.use('/api',route);

// ->api/student
// ->api/admin


app.get('/', (req, res) => {
    console.log("i'm handdler");
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});