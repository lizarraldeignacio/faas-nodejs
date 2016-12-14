var math = require('mathjs');

exports.matrixMultiply = function matrixMultiply (context, req) {
  if (req.method == 'POST') {
    data = req.body;
    var m3 = math.multiply(data.m1, data.m2);
    context.res = { body: m3 };
  }
  context.done();
};