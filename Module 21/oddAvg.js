function oddAvg (numbers){
    let sum = 0, count = 0;
    for(const number of numbers){
        if(number % 2 ==1){
            sum += number;
            count++;
        }
    }
    const avg = sum / count;
    return avg;

}

const numbers = [10, 15, 16, 20, 23, 27, 39, 49, 52];
const avg = oddAvg(numbers);
console.log(avg);