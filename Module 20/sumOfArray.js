function sumOfArray(numbers){
    let sum = 0;
    for(const number of numbers){
        sum+=number;
    }
    return sum;
}

const numbers = [10, 20, 30, 40, 50];
const sum = sumOfArray(numbers);
console.log(sum)