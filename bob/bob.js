var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (input === input.toUpperCase() && input != input.toLowerCase()) {
        return 'Whoa, chill out!';
    } else if (input.slice(-1) === "?") {
        return 'Sure.';
    } else if (input.trim().length === 0) {
        return 'Fine. Be that way!';
    } else 
    return 'Whatever.';
};

module.exports = Bob;

