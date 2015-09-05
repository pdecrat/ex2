Utils = {};

Utils.capitalize = function (s) {
    // returns the first letter capitalized + the string from index 1 and out aka. the rest of the string
    return s[0].toUpperCase() + s.substr(1);
};
