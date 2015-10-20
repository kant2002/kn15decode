var kn15 = require("../index.js");
var assert = require('assert');

describe('Tests decoding', function() {
    it('Decode code 0', function () {
        var decodedObject = kn15.decodeSection0(['14352', '19081'])
        var expected = {
            riverBasin: '14',
            postNo: '352',
            day: 19,
            term: 8,
            n: 1,
            hasSection1: true,
            hasOtherSections: false,
            hasSection7: false
        };
        assert.deepEqual(decodedObject, expected, "Decoded obejct does not match expectations");
    });
})
