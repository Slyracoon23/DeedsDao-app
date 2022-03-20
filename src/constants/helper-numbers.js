"use strict";
import { Decimal } from 'decimal.js-light';
import { BigNumber } from 'ethers';
const arr = {};
arr.FP_SCALING_FACTOR = arr.divCeil = arr.arraySub = arr.arrayAdd = arr.min = arr.max = arr.pct = arr.minInt = arr.maxInt = arr.maxUint = arr.bn = arr.fromFp = arr.toFp = arr.fp = arr.decimal = void 0;
var SCALING_FACTOR = 1e18;
var decimal = function (x) { return new Decimal(x.toString()); };
arr.decimal = decimal;
var fp = function (x) { return (0, arr.bn)((0, arr.toFp)(x)); };
arr.fp = fp;
var toFp = function (x) { return (0, arr.decimal)(x).mul(SCALING_FACTOR); };
arr.toFp = toFp;
var fromFp = function (x) { return (0, arr.decimal)(x).div(SCALING_FACTOR); };
arr.fromFp = fromFp;
var bn = function (x) {
    if (BigNumber.isBigNumber(x))
        return x;
    var stringified = parseScientific(x.toString());
    var integer = stringified.split('.')[0];
    return BigNumber.from(integer);
};
arr.bn = bn;
var maxUint = function (e) { return (0, arr.bn)(2).pow(e).sub(1); };
arr.maxUint = maxUint;
var maxInt = function (e) { return (0, arr.bn)(2).pow((0, arr.bn)(e).sub(1)).sub(1); };
arr.maxInt = maxInt;
var minInt = function (e) { return (0, arr.bn)(2).pow((0, arr.bn)(e).sub(1)).mul(-1); };
arr.minInt = minInt;
var pct = function (x, pct) { return (0, arr.bn)((0, arr.decimal)(x).mul((0, arr.decimal)(pct))); };
arr.pct = pct;
var max = function (a, b) {
    a = (0, arr.bn)(a);
    b = (0, arr.bn)(b);
    return a.gt(b) ? a : b;
};
arr.max = max;
var min = function (a, b) {
    a = (0, arr.bn)(a);
    b = (0, arr.bn)(b);
    return a.lt(b) ? a : b;
};
arr.min = min;
var arrayAdd = function (arrA, arrB) {
    return arrA.map(function (a, i) { return (0, arr.bn)(a).add((0, arr.bn)(arrB[i])); });
};
arr.arrayAdd = arrayAdd;
var arraySub = function (arrA, arrB) {
    return arrA.map(function (a, i) { return (0, arr.bn)(a).sub((0, arr.bn)(arrB[i])); });
};
arr.arraySub = arraySub;
var divCeil = function (x, y) {
    // ceil(x/y) == (x + y - 1) / y
    return x.add(y).sub(1).div(y);
};
arr.divCeil = divCeil;
arr.FP_SCALING_FACTOR = (0, arr.bn)(SCALING_FACTOR);
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

export { fp }