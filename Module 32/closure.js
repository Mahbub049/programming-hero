function doMath (a,b,c){
    let value1 = a;
    let value2 = b;
    let value3 = 0;
    if(c===3){
        return function(){
            return value3 = value1*value2;
        }
    }
}

console.log(doMath(4,4,3)());

//The inner scope can access the outer scope means function got access to the doMath variables and modified it. This is called closure.
