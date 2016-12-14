var math = require('mathjs');

exports.matrixMultiply = function matrixMultiply (event, context, callback) {
  const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : res,
        headers: {
            'Content-Type': 'application/json',
        },
    });
  console.log(event.httpMethod);
  if (event.httpMethod == 'POST') {
    data = JSON.parse(event.body);
    var m3 = math.multiply(data.m1, data.m2);
    done(false, JSON.stringify(m3));
  }
}