function sum(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number%2==0){
            sum+=number;
        }
    }
    return sum;
}

const arr = [10, 25, 32, 49, 53, 69, 80, 91];
console.log(sum(arr));