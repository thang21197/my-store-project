const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const usersRoute=require('./routes/users.route');
const client=require('./DB.js')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/users',usersRoute);

// app.get('/',(req,res)=>{
//     var data=[];    
//     client.connect(err => {
//         const collection = client.db("my-store").collection("users");
//         collection.find().forEach((value,key)=>{
//             data.push(value);
//         },()=>{
//         client.close();
//         res.send(data);
//         })
//       });
// })
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});