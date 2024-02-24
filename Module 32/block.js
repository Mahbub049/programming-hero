// if we use var the scope of the variable is anywhere in the code, like if we declare it inside a function still it will be accessible from the outside.

    let a = 10;
    if(a>5){
        var jog = a+20;
    }
    console.log(jog);

// But this doesn't work for const or let because they are block scoped or they work only between that particular block

//if we declare function like below this can be called anywhere in the code. rather if we declare like variable declaration that won't work
sum(10,20); //called before initialization

function sum(a,b){
    console.log(a+b);
}