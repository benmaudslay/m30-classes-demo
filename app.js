// OOP
class Bunny {
    constructor(fname, sname, age) {
        this._fname = fname,
        this._sname = sname,
        this._age = age,
        this.hops = 0
    }

    get name () {
        return `${this._fname} ${this._sname}`
    }

    get age () {
        return "Never ask a bunny their age!"
    }

    increaseHops () {
        this.hops++
    }

    birthday () {
        this.age++
    }
}

let sherlock = new Bunny("Sherlock", "Holmes", 2)

console.log(sherlock.age)
console.log(sherlock.name)