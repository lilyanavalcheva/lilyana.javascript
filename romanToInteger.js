var romanToInt = function (s) {
    var romans = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    let total = 0
    for ( let i = 0; i < s.length; i++) {
        let current = s[i]
        let next = s[i+1]
        if (romans[current] < romans[next]) {
            total -= romans[current]
        } else {
            total += romans[current]
        }
    }
    return total
}