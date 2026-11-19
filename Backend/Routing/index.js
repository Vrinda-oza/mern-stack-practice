const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

//requests

//get request
// app.get('/',(req,res)=>{
//     //res.send("Got a get request");
//       res.sendFile('./dummy.html',
//         {root:__dirname});
// });

// //post request
// app.post('/items',(req,res)=>{
//     //res.send("Got a post request");
//       res.json({x:1,y:2,z:3});
// });

// app.put('/items/:id',(req,res)=>{
//     res.send("Got a put request");
    
// });
// app.delete('/items/:id',(req,res)=>{
//     res.send("Got a delete request");
    
// });
// ===================================================

// router file of import item
const item = require('./routes/item');
const birds = require('./routes/birds');
//load into application
app.use('/api',item);
app.use('/filler',birds);


//->/api/ ->item home page
//->/api/items -> item post request
//->/api/items/id->put/delete request

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});