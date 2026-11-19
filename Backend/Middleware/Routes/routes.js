const express = require('express');
const router = express.Router();

//middlewares

const auth = function (req,res,next){
    console.log("i am inside middleware")

    //dummy user created here

    req.user ={userId:1,role:"admin"};

    if(req.user)
    {
        //if a valid user is there in req, then proceed to next middleware
        next();
    }
    else{
        //if not valid user
        res.json({
            success:false,
            message:"Not a valid User",
        })

    }
}

const isStudent = function(req,res,next){
    console.log("I am inside studnet middleware")

    if(req.user.role === "student")
    {
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access denied: this route is only for student"
        })
    }
}

const isAdmin = function(req,res,next)
{
    console.log("I am inside isAdmin middleware")
    
    if(req.user.role ==="admin")
    {
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access denied: this route is only for admins"
        })
    }
}

//routes

router.get('/student',auth,isStudent,(req,res)=>{
    console.log("i'm inside student route");
    res.send("Student specific page");

})

router.get('/admin',auth,isAdmin,(req,res)=>{
    console.log("i'm inside admin route");
    res.send("Admin specific page");

})



module.exports = router;