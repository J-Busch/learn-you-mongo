var mongo = require('mongodb').MongoClient;
var num = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var par = db.collection('parrots');
  par.count({
    age: {
      $gt: +num
    }
  }, function(err, count) {
    if (err) throw err;
    console.log(count);
    db.close();
  });
});
