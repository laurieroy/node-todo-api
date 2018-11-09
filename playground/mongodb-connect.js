// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



let url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   text: 'Laurie',
  //   location: 'Portland, OR'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to create user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();

});
