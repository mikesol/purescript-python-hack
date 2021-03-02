var pynode = require("@fridgerator/pynode");

exports.dlOpen = function (dlName) {
  return function () {
    // ie 'libpython3.6m.so'

    // Workaround for linking issue in linux:
    // https://bugs.python.org/issue4434
    // if you get: `undefined symbol: PyExc_ValueError` or `undefined symbol: PyExc_SystemError`

    pynode.dlOpen(dlName); // your libpython shared library
  };
};

exports.startInterpreter = function () {
  // optionally pass a path to use as Python module search path
  pynode.startInterpreter();
};

exports.appendSysPath = function (path) {
  return function () {
    // add current path as Python module search path, so it finds our test.py
    // ie "./"
    pynode.appendSysPath(path);
  };
};

exports.openFile = function (filename) {
  // open the python file (module)
  // ie "test"
  return function () {
    pynode.openFile(filename);
  };
};
exports.call0 = function (f) {
  return function () {
    // call the python function and get a return value
    return new Promise(function (resolve, reject) {
      pynode.call(f, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
};

exports.call1 = function (f) {
  return function (i0) {
    return function () {
      // call the python function and get a return value
      return new Promise(function (resolve, reject) {
        pynode.call(f, i0, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
  };
};

exports.call2 = function (f) {
  return function (i0) {
    return function (i1) {
      return function () {
        // call the python function and get a return value
        return new Promise(function (resolve, reject) {
          pynode.call(f, i0, i1, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      };
    };
  };
};

exports.call3 = function (f) {
  return function (i0) {
    return function (i1) {
      return function (i2) {
        return function () {
          // call the python function and get a return value
          return new Promise(function (resolve, reject) {
            pynode.call(f, i0, i1, i2, (err, result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            });
          });
        };
      };
    };
  };
};
