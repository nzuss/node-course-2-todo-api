// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
if(err){
 return console.log('unable to connect to mongodb server');
}
console.log('Connected to mango');

db.collection('newUser').find({name: 'Nick'}).toArray().then((docs) => {
  console.log('newUser');
  console.log(JSON.stringify(docs, undefined, 2));
},(err) => {
  console.log('unable to fetch todos', err)
})

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// },(err) => {
//   console.log('unable to fetch todos', err)
// })

// db.close();
});