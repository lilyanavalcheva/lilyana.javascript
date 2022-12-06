function random(min, max) {
    var number = Math.random() * (max - min) + min
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(random(1, 500))