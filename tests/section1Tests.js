var kn15 = require("../index.js");
var assert = require('assert');

describe('Tests decode groups in section 1', function() {
    it('Test positive water level', function () {
        var waterLevel = kn15.decodeSection1group1("10036");
        assert.equal(waterLevel, 36, "Water level is not expected");
        waterLevel = kn15.decodeSection1group1("10005");
        assert.equal(waterLevel, 5, "Water level is not expected");
        waterLevel = kn15.decodeSection1group1("11011");
        assert.equal(waterLevel, 1011, "Water level is not expected");
    })

    it('Test negative water level', function () {
        var waterLevel = kn15.decodeSection1group1("15036");
        assert.equal(waterLevel, -36, "Water level is not expected");
        waterLevel = kn15.decodeSection1group1("15223");
        assert.equal(waterLevel, -223, "Water level is not expected");
    })
})
