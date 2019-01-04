// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
console.log('Connected to mango');

db.collection('Todos').findOneAndUpdate({
  _id: ObjectID('5c2f26c4c4c2903277ce7f3b')
},{
  $set: {
    text: 'kkas jauns'
  },
  $inc:{
    age: -5
  }
},{
  returnOriginal:false
}).then((result) => {
  console.log(result)
});

// db.close();
});