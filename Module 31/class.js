class Human{
    eyes = 2;   //Properties (Do not require const or let)
    legs =2;
    constructor(name, age){ //Own method or constructor that takes parameter and uses this to store them (Unique Info)
        this.name = name;
        this.age = age;
    }
    eat(food){  //Method
        console.log(`Eating ${food}`);
    }
}

const Mahbub = new Human('Mahbub', 24); //Creating instance or object
console.log(Mahbub);
Mahbub.eat('Burger');   //Calling method using the object name