class superHero {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
}

const divide = (a, b) => a/b;

 class villain {
    constructor( name, evil) {
        this.name = name;
        this.evil = evil;
    }
    getEvil() {
       return this.evil;
    }
    getName(){
        return this.name;
    }
}

module.exports = { superHero, divide, villain };
