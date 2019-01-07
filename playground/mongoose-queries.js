const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


let id = '5c2f5ac05e976d8534f03aee';

if(!ObjectID.isValid(id)){
console.log('id not valid');
}

User.findById(id).then((user) => {
  if(!user){
    return console.log('id not found')
  }
  console.log('Todo By ID', user);
}).catch((e) => console.log(e));