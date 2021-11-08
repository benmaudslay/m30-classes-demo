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

let bunnies = [
    { name: "Sherlock", age: 3 },
    { name: "Watson", age: 2 },
    { name: "Enola", age: 1 },
]

let instances = []

for (let i = 0; i < bunnies.length; i++) {
    const item = bunnies[i];
    instances.push(new Bunny(item.name, item.age))
}

console.log(instances)