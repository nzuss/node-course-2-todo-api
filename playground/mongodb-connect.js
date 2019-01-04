// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
if(err){
 return console.log('unable to connect to mongodb server');
}
console.log('Connected to mango');

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// },(err, result) => {
//   if (err){
//     return console.log('unable to todo')
//   }
//   console.log(JSON.stringify(result.ops, undefined , 2));
// });


// db.collection('newUser').insertOne({
//   name: 'Nick',
//   age: 15,
//   location: 'Riga'
// },(err, result) => {
//   if (err){
//     return console.log('unable to todo')
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// });

db.close();
});