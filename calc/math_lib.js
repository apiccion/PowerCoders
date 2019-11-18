module.exports = {
    add: add,
    mul: mul,
};

function add(a, b) {
    return parseInt(a) + parseInt(b);
};

function mul(a, b) {
    var ans = 0;

    for (var i = 0; i < parseInt(a); i++) {
        ans = ans + parseInt(b);
    }

    return ans;
}
