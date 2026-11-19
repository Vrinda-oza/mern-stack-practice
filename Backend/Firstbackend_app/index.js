//including express module and initialising an app

const express = require('express');
const app = express();

//variable that stores the port number
const port = 3000; 

app.get('/', (req, res) => {
  res.send('Birds home page');
});

//request -->get/put/post/delete
//path  -- /,/about,/articles,/blogs

//start your app or server 
app.listen(port,()=>{
    console.log("application now running")
})