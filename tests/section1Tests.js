var kn15 = require("../index.js");
var assert = require('assert');

describe('Tests decode groups in section 1', function() {
    it('Test positive water level', function () {
        var waterLevel = kn15.decodeSection1group1("10036");
        assert.equal(waterLevel, 36, "Water level " + waterLevel + " is not expected");
        waterLevel = kn15.decodeSection1group1("10005");
        assert.equal(waterLevel, 5, "Water level " + waterLevel + " is not expected");
        waterLevel = kn15.decodeSection1group1("11011");
        assert.equal(waterLevel, 1011, "Water level " + waterLevel + " is not expected");
    })

    it('Test negative water level', function () {
        var waterLevel = kn15.decodeSection1group1("15036");
        assert.equal(waterLevel, -36, "Water level is not expected");
        waterLevel = kn15.decodeSection1group1("15223");
        assert.equal(waterLevel, -223, "Water level is not expected");
    })
    
    it('Test positive water level change', function () {
        var waterLevel = kn15.decodeSection1group2("20551");
        assert.equal(waterLevel, 55, "Water level change is not expected");
    })
    
    it('Test negative water level change', function () {
        var waterLevel = kn15.decodeSection1group2("20052");
        assert.equal(waterLevel, -5, "Water level change is not expected");
        waterLevel = kn15.decodeSection1group2("21252");
        assert.equal(waterLevel, -125, "Water level change is not expected");
    })
    
    it('Test zero water level change', function () {
        var waterLevel = kn15.decodeSection1group2("20000");
        assert.equal(waterLevel, 0, "Water level change is not expected");
    })    
    
    it('Test positive water level for 20h window', function () {
        var waterLevel = kn15.decodeSection1group3("30036");
        assert.equal(waterLevel, 36, "Water level is not expected");
        waterLevel = kn15.decodeSection1group3("30005");
        assert.equal(waterLevel, 5, "Water level is not expected");
        waterLevel = kn15.decodeSection1group3("31011");
        assert.equal(waterLevel, 1011, "Water level is not expected");
    })
    
    it('Test negative water level for 20h window', function () {
        var waterLevel = kn15.decodeSection1group3("35036");
        assert.equal(waterLevel, -36, "Water level is not expected");
        waterLevel = kn15.decodeSection1group3("35223");
        assert.equal(waterLevel, -223, "Water level is not expected");
    })
    
})
