var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var num = process.argv[2];

mongo.connect(url, function(err, db) {
  coll = db.collection('parrots');
  coll.find({
    age: {
      $gt: +num
    }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray(function(err, docs) {
    console.log(docs);
    db.close();
  });
});
