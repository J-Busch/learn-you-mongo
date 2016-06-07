var mongo = require('mongodb').MongoClient;
var sz = process.argv[2];

var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var shirts = db.collection('prices');
  shirts.aggregate([{
    $match: {
      size: sz
    }
  }, {
    $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }
  }]).toArray(function(err, result) {
    if (err) throw err;
    console.log(Number(result[0].average).toFixed(2));
    db.close();
  });  
});
