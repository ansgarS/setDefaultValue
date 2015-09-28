import assert from "assert";
import defaults from "../index";

describe("SetDefault", function() {
    it("creates a default-object with null", function() {
        const obj = defaults(null, {
            checkNull: true
        });

        assert(obj.value === null);
        assert(obj.checkNull === true);

        assert.equal(obj.to(1), 1);
    });

    it("creates a default-object with undefined", function() {
        /*eslint-disable*/
        const obj = defaults(undefined, {
            checkUndefined: true
        });

        assert(obj.value === undefined);
        assert(obj.checkUndefined === true);

        assert.equal(obj.to(2), 2);
        /*eslint-enable*/
    });

    it("creates a default-object with a value\\null|undefined", function() {
        const obj = defaults(4, {
            checkUndefined: true,
            checkNull:      true
        });

        assert(obj.value === 4);
        assert.equal(obj.to(5), 4);
    });
});
