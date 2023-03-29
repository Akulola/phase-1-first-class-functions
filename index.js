function receivesAFunction(callback) {
    return callback()
}
receivesAFunction(spy)

function returnsANamedFunction() {
    return function x() {return x; }
}
function returnsAnAnonymousFunction() { return function(){}
}