"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = (function () {
    function defaults(value) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, defaults);

        this.value = value;
        this.checkNull = options.checkNull || false;
        this.checkUndefined = options.checkUndefined || false;
    }

    /**
     * Sets a default value, if null/undefined is given
     *
     * @param  {*} defaultValue replacing null/undefined
     * @return {*}
     */

    _createClass(defaults, [{
        key: "to",
        value: function to(defaultValue) {
            return this.checkNull && this.value === null || this.checkUndefined && typeof this.value === "undefined" ? defaultValue : this.value;
        }
    }]);

    return defaults;
})();

exports["default"] = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return Object.freeze(new (_bind.apply(defaults, [null].concat(args)))());
};

module.exports = exports["default"];
