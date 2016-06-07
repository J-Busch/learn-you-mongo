var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
var collName = process.argv[3];
var id = process.argv[4];

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var coll = db.collection(collName);
  coll.remove({
    _id: id
  }, function(err) {
    db.close();
  });
});
