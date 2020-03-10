//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = require('./predict_types');
//HELPER FUNCTIONS AND STRUCTURES

var Predictor_ping_args = function(args) {
};
Predictor_ping_args.prototype = {};
Predictor_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Predictor_ping_args.prototype.write = function(output) {
  output.writeStructBegin('Predictor_ping_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Predictor_ping_result = function(args) {
};
Predictor_ping_result.prototype = {};
Predictor_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Predictor_ping_result.prototype.write = function(output) {
  output.writeStructBegin('Predictor_ping_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Predictor_pong_args = function(args) {
  this.data = null;
  if (args) {
    if (args.data !== undefined && args.data !== null) {
      this.data = Thrift.copyList(args.data, [null]);
    }
  }
};
Predictor_pong_args.prototype = {};
Predictor_pong_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        this.data = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = input.readDouble();
          this.data.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Predictor_pong_args.prototype.write = function(output) {
  output.writeStructBegin('Predictor_pong_args');
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.DOUBLE, this.data.length);
    for (var iter4 in this.data) {
      if (this.data.hasOwnProperty(iter4)) {
        iter4 = this.data[iter4];
        output.writeDouble(iter4);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Predictor_pong_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [null]);
    }
  }
};
Predictor_pong_result.prototype = {};
Predictor_pong_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        this.success = [];
        var _rtmp36 = input.readListBegin();
        var _size5 = _rtmp36.size || 0;
        for (var _i7 = 0; _i7 < _size5; ++_i7) {
          var elem8 = null;
          elem8 = input.readDouble();
          this.success.push(elem8);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Predictor_pong_result.prototype.write = function(output) {
  output.writeStructBegin('Predictor_pong_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.DOUBLE, this.success.length);
    for (var iter9 in this.success) {
      if (this.success.hasOwnProperty(iter9)) {
        iter9 = this.success[iter9];
        output.writeDouble(iter9);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Predictor_predict_args = function(args) {
  this.data = null;
  this.timestamp = null;
  if (args) {
    if (args.data !== undefined && args.data !== null) {
      this.data = Thrift.copyList(args.data, [null]);
    }
    if (args.timestamp !== undefined && args.timestamp !== null) {
      this.timestamp = args.timestamp;
    }
  }
};
Predictor_predict_args.prototype = {};
Predictor_predict_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        this.data = [];
        var _rtmp311 = input.readListBegin();
        var _size10 = _rtmp311.size || 0;
        for (var _i12 = 0; _i12 < _size10; ++_i12) {
          var elem13 = null;
          elem13 = input.readDouble();
          this.data.push(elem13);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.timestamp = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Predictor_predict_args.prototype.write = function(output) {
  output.writeStructBegin('Predictor_predict_args');
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.DOUBLE, this.data.length);
    for (var iter14 in this.data) {
      if (this.data.hasOwnProperty(iter14)) {
        iter14 = this.data[iter14];
        output.writeDouble(iter14);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.STRING, 2);
    output.writeString(this.timestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Predictor_predict_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.pred(args.success);
    }
  }
};
Predictor_predict_result.prototype = {};
Predictor_predict_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.pred();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Predictor_predict_result.prototype.write = function(output) {
  output.writeStructBegin('Predictor_predict_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PredictorClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
PredictorClient.prototype = {};
PredictorClient.prototype.seqid = function() { return this._seqid; };
PredictorClient.prototype.new_seqid = function() { return this._seqid += 1; };

PredictorClient.prototype.ping = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_ping();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_ping();
  }
};

PredictorClient.prototype.send_ping = function() {
  var output = new this.pClass(this.output);
  var args = new Predictor_ping_args();
  try {
    output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

PredictorClient.prototype.recv_ping = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Predictor_ping_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};

PredictorClient.prototype.pong = function(data, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_pong(data);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_pong(data);
  }
};

PredictorClient.prototype.send_pong = function(data) {
  var output = new this.pClass(this.output);
  var params = {
    data: data
  };
  var args = new Predictor_pong_args(params);
  try {
    output.writeMessageBegin('pong', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

PredictorClient.prototype.recv_pong = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Predictor_pong_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('pong failed: unknown result');
};

PredictorClient.prototype.predict = function(data, timestamp, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_predict(data, timestamp);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_predict(data, timestamp);
  }
};

PredictorClient.prototype.send_predict = function(data, timestamp) {
  var output = new this.pClass(this.output);
  var params = {
    data: data,
    timestamp: timestamp
  };
  var args = new Predictor_predict_args(params);
  try {
    output.writeMessageBegin('predict', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

PredictorClient.prototype.recv_predict = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Predictor_predict_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('predict failed: unknown result');
};
var PredictorProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
PredictorProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
PredictorProcessor.prototype.process_ping = function(seqid, input, output) {
  var args = new Predictor_ping_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.ping.length === 0) {
    Q.fcall(this._handler.ping.bind(this._handler)
    ).then(function(result) {
      var result_obj = new Predictor_ping_result({success: result});
      output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.ping(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Predictor_ping_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PredictorProcessor.prototype.process_pong = function(seqid, input, output) {
  var args = new Predictor_pong_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.pong.length === 1) {
    Q.fcall(this._handler.pong.bind(this._handler),
      args.data
    ).then(function(result) {
      var result_obj = new Predictor_pong_result({success: result});
      output.writeMessageBegin("pong", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("pong", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.pong(args.data, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Predictor_pong_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("pong", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("pong", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PredictorProcessor.prototype.process_predict = function(seqid, input, output) {
  var args = new Predictor_predict_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.predict.length === 2) {
    Q.fcall(this._handler.predict.bind(this._handler),
      args.data,
      args.timestamp
    ).then(function(result) {
      var result_obj = new Predictor_predict_result({success: result});
      output.writeMessageBegin("predict", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("predict", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.predict(args.data, args.timestamp, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Predictor_predict_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("predict", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("predict", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
