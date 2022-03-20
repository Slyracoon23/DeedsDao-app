"use strict";
import { Decimal } from 'decimal.js';
import { BigNumber } from 'ethers';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FP_SCALING_FACTOR = exports.divCeil = exports.arraySub = exports.arrayAdd = exports.min = exports.max = exports.pct = exports.minInt = exports.maxInt = exports.maxUint = exports.bn = exports.fromFp = exports.toFp = exports.fp = exports.decimal = void 0;
var SCALING_FACTOR = 1e18;
var decimal = function (x) { return new Decimal(x.toString()); };
exports.decimal = decimal;
var fp = function (x) { return (0, exports.bn)((0, exports.toFp)(x)); };
exports.fp = fp;
var toFp = function (x) { return (0, exports.decimal)(x).mul(SCALING_FACTOR); };
exports.toFp = toFp;
var fromFp = function (x) { return (0, exports.decimal)(x).div(SCALING_FACTOR); };
exports.fromFp = fromFp;
var bn = function (x) {
    if (BigNumber.isBigNumber(x))
        return x;
    var stringified = parseScientific(x.toString());
    var integer = stringified.split('.')[0];
    return BigNumber.from(integer);
};
exports.bn = bn;
var maxUint = function (e) { return (0, exports.bn)(2).pow(e).sub(1); };
exports.maxUint = maxUint;
var maxInt = function (e) { return (0, exports.bn)(2).pow((0, exports.bn)(e).sub(1)).sub(1); };
exports.maxInt = maxInt;
var minInt = function (e) { return (0, exports.bn)(2).pow((0, exports.bn)(e).sub(1)).mul(-1); };
exports.minInt = minInt;
var pct = function (x, pct) { return (0, exports.bn)((0, exports.decimal)(x).mul((0, exports.decimal)(pct))); };
exports.pct = pct;
var max = function (a, b) {
    a = (0, exports.bn)(a);
    b = (0, exports.bn)(b);
    return a.gt(b) ? a : b;
};
exports.max = max;
var min = function (a, b) {
    a = (0, exports.bn)(a);
    b = (0, exports.bn)(b);
    return a.lt(b) ? a : b;
};
exports.min = min;
var arrayAdd = function (arrA, arrB) {
    return arrA.map(function (a, i) { return (0, exports.bn)(a).add((0, exports.bn)(arrB[i])); });
};
exports.arrayAdd = arrayAdd;
var arraySub = function (arrA, arrB) {
    return arrA.map(function (a, i) { return (0, exports.bn)(a).sub((0, exports.bn)(arrB[i])); });
};
exports.arraySub = arraySub;
var divCeil = function (x, y) {
    // ceil(x/y) == (x + y - 1) / y
    return x.add(y).sub(1).div(y);
};
exports.divCeil = divCeil;
exports.FP_SCALING_FACTOR = (0, exports.bn)(SCALING_FACTOR);
function parseScientific(num) {
    // If the number is not in scientific notation return it as it is
    if (!/\d+\.?\d*e[+-]*\d+/i.test(num))
        return num;
    // Remove the sign
    var numberSign = Math.sign(Number(num));
    num = Math.abs(Number(num)).toString();
    // Parse into coefficient and exponent
    var _a = num.toLowerCase().split('e'), coefficient = _a[0], exponent = _a[1];
    var zeros = Math.abs(Number(exponent));
    var exponentSign = Math.sign(Number(exponent));
    var _b = (coefficient.indexOf('.') != -1 ? coefficient : "".concat(coefficient, ".")).split('.'), integer = _b[0], decimals = _b[1];
    if (exponentSign === -1) {
        zeros -= integer.length;
        num =
            zeros < 0
                ? integer.slice(0, zeros) + '.' + integer.slice(zeros) + decimals
                : '0.' + '0'.repeat(zeros) + integer + decimals;
    }
    else {
        if (decimals)
            zeros -= decimals.length;
        num =
            zeros < 0
                ? integer + decimals.slice(0, zeros) + '.' + decimals.slice(zeros)
                : integer + decimals + '0'.repeat(zeros);
    }
    return numberSign < 0 ? '-' + num : num;
}
export function toNormalizedWeights(weights) {
    const sum = weights.map(bn).reduce((total, weight) => total.add(weight), bn(0));
  
    const normalizedWeights = [];
    let normalizedSum = bn(0);
    for (let index = 0; index < weights.length; index++) {
      if (index < weights.length - 1) {
        normalizedWeights[index] = weights[index].mul(fp(1)).div(sum);
        normalizedSum = normalizedSum.add(normalizedWeights[index]);
      } else {
        normalizedWeights[index] = fp(1).sub(normalizedSum);
      }
    }
  
    return normalizedWeights;
  }