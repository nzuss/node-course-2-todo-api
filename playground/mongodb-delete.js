// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
console.log('Connected to mango');

//delete many

// db.collection('newUser').deleteMany({name: 'Nick'}).then((result) => {
//   console.log(result)
// });

// delete one

// db.collection('newUser').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result)
// });

//findOneAndDelete

db.collection('newUser').findOneAndDelete({
  _id: ObjectID('5c2f287d67679b328d153843')
}).then((result) => {
  console.log(result)
});


// db.close();
});