// OOP
class Animal {
    constructor(fname, sname, age) {
        this._fname = fname,
        this._sname = sname,
        this._age = age,
        this.hunger = 0,
        this.thirst = 0,
        this.play = 0
    }

    get name () {
        return `${this._fname} ${this._sname}`
    }

    get age () {
        return "Never ask a bunny their age!"
    }

    birthday () {
        this.age++
    }
}

class Bunny extends Animal {
    constructor(fname, sname, age) {
        super(fname, sname, age)
        this.hops = 0
    }

    increaseHops () {
        this.hops++
    }
}

class Cat extends Animal {
    constructor(fname, sname, age) {
        super(fname, sname, age)
        this.miceCaught = 0
    }
   
    increaseCatch () {
        this.miceCaught++
    }
}

class Dog extends Animal {
    constructor(fname, sname, age, goodBoy) {
        super(fname, sname, age)
        this.bonesBuried = 0,
        this.goodBoy = goodBoy
    }
}


let sherlock = new Bunny("Sherlock", "Holmes", 2)
let fido = new Dog("Fido", "Woofers", 4, false)

console.log(fido)
