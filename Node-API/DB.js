
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://thang21197:huyen181097@cluster0-qgtdg.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
module.exports = client
// client.connect(err => {
//   const collection = client.db("my-store").collection("users");
//   collection.find().forEach(value=>{
//       console.log(value);
//   })
//   client.close();
// });
