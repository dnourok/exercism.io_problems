var Bob = function(){};

Bob.prototype.hey = function(input) {
	if (input.includes("-") || input.includes("\'") || input.match("\\d")){
		return "Whatever."
	} else if (input.includes("!") || input === input.toUpperCase() || input.toUpperCase().match("\\d")){
		return "Whoa, chill out!"
	} else if (input.includes("?")) {
		return "Sure."
	} else if (input.match(""))
		return "Fine. Be that way!"
};

module.exports = Bob;

