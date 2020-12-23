var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};

modules.exports.add = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'add', [arg0]);
}

modules.exports.substract = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'substract', [arg0]);
}
