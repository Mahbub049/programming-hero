//Sending as parameter a function into another function and then calling that sent function inside that function is called callback function.

function greeting(functionName, parameter){
    functionName(parameter);
}

function fruit(name){
    console.log(`I will eat now ${name}`);
}

function drink(name){
    console.log(`I will drink now ${name}`);
}

function fastFoods(name){
    console.log(`I will eat now ${name}`);
}

greeting(fruit, 'grapes');
greeting(drink, 'pepsi');
greeting(fastFoods, 'burger');