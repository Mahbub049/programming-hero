//While Loop
let num = 1; //Loop Variable, this must be increased

while(num<11){ //it will check until its false
    console.log("Roll Number: "+num);
    num++; //This is increasing the number 1 at a time.
}

console.log('')

//Sum of numbers
let sum = 0, i=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

console.log('')

// DO WHILE
i=0;
do{
    console.log(i);
    i++;
}
while(i<=5);