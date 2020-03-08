'use strict';

/**
 * 17の倍数が渡された場合のみtrueを返す
 * @param {value} 数値
 * @resurt {boolean} 17の倍数ならtrue
 */
function isMultipleOfSeventeen(value) {
    return value % 17 === 0;
}

module.exports = { isMultipleOfSeventeen
}
