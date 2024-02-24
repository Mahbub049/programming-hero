function sum(){
    //arguments can be used and shows as object whicih gives an array like object
    let sum = 0;
    const array = [...arguments];
    console.log(array);
    for(const value of array){
        sum+=value;
    }
    return sum;
}

const result = sum(10, 20, 30, 40, 50);
console.log(result);