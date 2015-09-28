"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

/*eslint-disable*/
var UNDEFINED = undefined;
/*eslint-enable*/

describe("SetDefault", function () {
    it("creates a default-object with null", function () {
        var obj = (0, _index2["default"])(null);

        (0, _assert2["default"])(obj.value === null);
        (0, _assert2["default"])(obj.checkNull === true);

        _assert2["default"].equal(obj.to(1), 1);
    });

    it("creates a default-object without checking for it", function () {
        var obj1 = (0, _index2["default"])(null, {
            checkNull: false
        });

        _assert2["default"].equal(obj1.to(1), null);

        var obj2 = (0, _index2["default"])(UNDEFINED, {
            checkUndefined: false
        });

        _assert2["default"].equal(obj2.to(1), UNDEFINED);
    });

    it("creates a default-object with undefined", function () {
        var obj = (0, _index2["default"])(UNDEFINED);

        (0, _assert2["default"])(obj.value === UNDEFINED);
        (0, _assert2["default"])(obj.checkUndefined === true);

        _assert2["default"].equal(obj.to(2), 2);
    });

    it("creates a default-object with a value\\null|undefined", function () {
        var obj = (0, _index2["default"])(4, {
            checkUndefined: true,
            checkNull: true
        });

        (0, _assert2["default"])(obj.value === 4);
        _assert2["default"].equal(obj.to(5), 4);
    });
});
