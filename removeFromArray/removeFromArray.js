const removeFromArray = function(argOne, argTwo, argThree) {
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        if (arr.includes(arguments[i])){
            target = arr.indexOf(arguments[i]);
            arr.splice(target, 1);
        }
    }
    return arr;
}

module.exports = removeFromArray
