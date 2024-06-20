const add = require("./add.js");
require('./batman');
require('./superman');
require('./iife')
console.log("hello from index");
const sum = add(3, 4);
console.log(sum);
const superHeroModule = require('./superhero');
const { superHero, divide, villain } = superHeroModule;
const bubbles = new superHero('bubbles', 8);
console.log(bubbles.getName());
bubbles.setName("blossom");
console.log(bubbles.getAge());
const answer = divide(10, 2);
console.log(answer);
const mojojojo = new villain("mojo", "diabolic");
console.log(mojojojo);
const data = require('./data.json');
console.log(data);
console.log("watch mode");



