"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

describe("SetDefault", function () {
    it("creates a default-object with null", function () {
        var obj = (0, _index2["default"])(null, {
            checkNull: true
        });

        (0, _assert2["default"])(obj.value === null);
        (0, _assert2["default"])(obj.checkNull === true);

        _assert2["default"].equal(obj.to(1), 1);
    });

    it("creates a default-object with undefined", function () {
        /*eslint-disable*/
        var obj = (0, _index2["default"])(undefined, {
            checkUndefined: true
        });

        (0, _assert2["default"])(obj.value === undefined);
        (0, _assert2["default"])(obj.checkUndefined === true);

        _assert2["default"].equal(obj.to(2), 2);
        /*eslint-enable*/
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