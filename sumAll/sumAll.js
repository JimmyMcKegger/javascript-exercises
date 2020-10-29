const sumAll = function(argOne, argTwo) {
    let type = typeof arguments[1];
    //check for negatives or strings
    if (arguments[0] < 0 || arguments[1] < 0) {
        return 'ERROR';
    } else if (type != 'number') {
        return 'ERROR';
    } else {
        //find the range
        let dif = arguments[1] - arguments[0];
        let difRev = arguments[0] - arguments[1];
        if (difRev > dif) {
            dif = difRev;
        }
        //build an array
        let arr = [];
        let start = Math.min(arguments[0], arguments[1]);
        for (let i = 0; i <= dif; i++) {
            arr.push(start + i);
        }
        //add it together
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
        } 
}


module.exports = sumAll
