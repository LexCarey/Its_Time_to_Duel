class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        console.log(this.name + " beat up " + target.name);
        target.resilience -= this.power;
    }
}

class RedBeltNinja extends Unit {
    constructor(name) {
        super(name, 3, 3, 4)
    }
}

class BlackBeltNinja extends Unit {
    constructor(name) {
        super(name, 4, 5, 4)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if(target instanceof Unit) {
            console.log(this.text);
            if (this.stat == "resilience") {
                target.resilience += this.magnitude;
            } else if (this.stat == "power") {
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class HardAlgorithm extends Effect {
    constructor() {
        super("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience" , +3);
    }
}

class UnhandledPromiseRejection extends Effect {
    constructor() {
        super("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
    }
}

class PairProgramming extends Effect {
    constructor() {
        super("Pair Programming", 3, "Increase target's power by 2", "power", +2);
    }
}

const rbn = new RedBeltNinja("Pikachu");

const bbn = new BlackBeltNinja("Meowth");

const ha = new HardAlgorithm();

const upr = new UnhandledPromiseRejection();

const pp = new PairProgramming();


ha.play(rbn);
console.log(rbn)

upr.play(rbn);
console.log(rbn)

pp.play(rbn);
console.log(rbn)

rbn.attack(bbn);
console.log(bbn)
