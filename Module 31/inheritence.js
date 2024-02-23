class Animal{
    constructor(name, legs, eyes){
        this.name = name;
        this.legs = legs;
        this.eyes = eyes;
    }
}

class Cat extends Animal{   //This is inheriting the animal class and getting the properties of Animal Class
    constructor(name, legs, eyes, sound){
        super(name, legs, eyes);    //This means this is taking the properties of the animal
        this.sound = sound;
    }
}

const cat = new Cat('cat',4,2,'Meow');
console.log(cat);