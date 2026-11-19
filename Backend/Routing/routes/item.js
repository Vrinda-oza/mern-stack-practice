//all the file specific routes will be store here.

const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.send("Got a get request");
    //   res.sendFile('../dummy.html',
    //     {root:__dirname});
});

//post request
router.post('/items',(req,res)=>{
    //res.send("Got a post request");
      res.json({x:1,y:2,z:3});
});

router.put('/items/:id',(req,res)=>{
    res.send("Got a put request");
    
});
router.delete('/items/:id',(req,res)=>{
    res.send("Got a delete request");
    
});

module.exports = router;