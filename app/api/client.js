const thrift = require('thrift');
const Predictor = require('./gen-thrift/Predictor');
const assert = require('assert');

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

async function predict(li, timestamp) {
  // Create a Calculator client with the connection

  const connection = thrift.createConnection("localhost", 9090, {
    transport: transport,
    protocol: protocol
  });

  connection.on('error', function (err) {
    assert(false, err);
  });

  const client = thrift.createClient(Predictor, connection);


  if (!li) {
    li = [-0.075299, 0.229284, -0.327069, 0.374839, 0.664286, 0.308727, -
      0.241830, -0.095738, 0.127902, -0.121672, 0.253674, 0.692829, -
      0.224319, -
      0.484372, 0.658943, -0.253818, 1.802471, -0.155913, -0.230774,
      0.104397,
      0.172798, 0.100519, 0.144300, 0.055570, -0.221357, 0.065689,
      0.066313, 0.246596, 0.140299, 0.082253, -0.218322, 0.053356, 0.066365,
      0.260274, 0.197073, 0.194764, 0.029705, -0.052890, 0.108787, -
      0.016712,
      0.072082, -0.185158, 0.032485, -0.315530, -0.476972, -0.089156,
      0.015487,
      0.692601, 0.658959, -0.211038, 0.059118, -0.578951
    ];
  }


  const predictPromise = (li, timestamp) => {
    return new Promise((resolve, reject) => {
      client.predict(li, timestamp, (err, response) => {
        if (err) return reject(err);
        resolve(response);
      })
    });
  }

  timestamp = timestamp || String(Date.now());
  const data = await predictPromise(li, timestamp);
  return data;
}

module.exports = {
  predict
}
