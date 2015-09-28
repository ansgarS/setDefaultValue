import assert from "assert";
import defaults from "../index";

describe("SetDefault", function() {
    it("creates a default-object with null", function() {
        const obj = defaults(null);

        assert(obj.value === null);
        assert(obj.checkNull === true);

        assert.equal(obj.to(1), 1);
    });


    it("creates a default-object without checking for it", function() {
        /*eslint-disable*/
        const obj1 = defaults(null, {
            checkNull: false
        });

        assert.equal(obj1.to(1), null);

        const obj2 = defaults(undefined, {
            checkUndefined: false
        });

        assert.equal(obj2.to(1), undefined);
    });

    it("creates a default-object with undefined", function() {

        const obj = defaults(undefined);

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
