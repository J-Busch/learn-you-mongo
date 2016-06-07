var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var first = process.argv[2];
var last = process.argv[3];

var doc = {
  firstName: first,
  lastName: last
}

mongo.connect(url, function(err, db) {
  var coll = db.collection('docs');
  coll.insert(doc, function(err, data) {
    console.log(JSON.stringify(doc));
    db.close();
  });
});
