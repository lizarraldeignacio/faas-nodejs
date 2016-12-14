var math = require('mathjs');

exports.matrixMultiply = function matrixMultiply (req, res) {
  if (req.method == 'POST') {
    data = req.body;
    var m3 = math.multiply(data.m1, data.m2);
    res.status(200).send(JSON.stringify(m3));
  }
}