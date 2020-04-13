const client=require('../DB.js')
module.exports.getUsers= (req,res)=>{
    
    var data=[];    
    client.connect(err => {
        const collection = client.db("my-store").collection("users");
        collection.find().forEach((value,key)=>{
            data.push(value);
        },()=>{
        client.close();
        res.send(data);
        })
      });
}