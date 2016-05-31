'use strict';

const chai = require('chai');
const Activator = require('../lib/activator');

chai.should();

class Animal {
    constructor() {

    }

    makeSound() {
        return null;
    }
}

class Dog extends Animal {
    
    makeSound() {
        return "Woof";
    }
}

class Horse extends Animal {

    makeSound() {
        return "Neigh";
    }
}

class Cat extends Animal {

    constructor(name, color) {
        super();
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    makeSound() {
        return "Meow";
    }
}

describe('Activator tests', () => {

    it('should create instance of Animal', () => {
        let instance = Activator.createInstance(Animal);
        instance.constructor.name.should.equal('Animal');
    });

    it('should create instance of Dog', () => {
        let instance = Activator.createInstance(Dog);
        instance.constructor.name.should.equal('Dog');
        instance.makeSound().should.equal('Woof');
    });

    it('should create instance of Horse', () => {
        let instance = Activator.createInstance(Horse);
        instance.constructor.name.should.equal('Horse');
        instance.makeSound().should.equal('Neigh');
    });

    it('should create instance of Cat with constructor with different args', () => {
        let instance = Activator.createInstanceWithArgs(Cat, 'Garfield', 'orange');
        instance.constructor.name.should.equal('Cat');
        instance.makeSound().should.equal('Meow');
        instance.name.should.equal('Garfield');
        instance.color.should.equal('orange');
    });

});