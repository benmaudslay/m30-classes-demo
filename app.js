// OOP
class Bunny {
    constructor(a, b) {
        this.name = a,
        this.age = b,
        this.hops = 0
    }

    increaseHops () {
        this.hops++
    }

    birthday () {
        this.age++
    }
}

let sherlock = new Bunny("Sherlock", 3)
let watson = new Bunny("Watson", 2)

console.log(sherlock)
console.log(watson)
