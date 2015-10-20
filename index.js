/**
 * Decodes the KN15 code. 
 */
function decode(code) {

}

/**
 * Decodes section 0 of the KN15 code.
 * @param data Array with 5 characters data.
 */
function decodeSection0(data) {
	if (data.length !== 2 && data.length !== 3) {
		throw new Error("Please pass array which consists from 2 or 3, 5 character code sequences.");
	}
	
	if (data.length === 3) {
		throw new Error("The information about hydorlogic post is not supported.");
	}
	
	var n = parseInt(data[1].substring(4, 5));
	var term = parseInt(data[1].substring(2, 4));
	return {
		riverBasin: data[0].substring(0, 2),
		postNo: data[0].substring(2, 5),
		day: parseInt(data[1].substring(0, 2)),
		term: term,
		n: n,
		hasSection1: n === 1 || n === 2 || (n === 3 && term !== 8),
		hasOtherSections: (n === 2 && term === 8) || (n === 4 && term === 8) || (n === 5 && term === 8), 
		hasSection7: n === 7
	}
}

/**
 * Decode the group 1 of section 1
 * @param data {String} String with 5 characters data.
 * @returns {Number} level of water in the river. This level represented in the centimeters
 */
function decodeSection1group1(data) {
    if (data[0] !== '1') {
        throw new Error("This is not group 1");
    }
    
    var waterLevelString = data.substr(1, 5);
    var waterLevel = parseInt(waterLevelString);
    if (waterLevel > 5000) {
        return 5000 - waterLevel;
    } else {
        return waterLevel;
    }
}

module.exports = {
	decode: decode,
	decodeSection0: decodeSection0,
    decodeSection1group1: decodeSection1group1
};
