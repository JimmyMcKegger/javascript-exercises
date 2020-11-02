const leapYears = function(x) {
    if (arguments[0] % 4 == 0) {
        if (arguments[0] % 100 == 0 && arguments[0] % 400 == 0) {
            return true;
        } else if (arguments[0] % 100 == 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

module.exports = leapYears
