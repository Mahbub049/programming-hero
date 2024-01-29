let i;
let sum =0;
for(i=0; i<=20; i++){
    if(i==10){
        break;
    }
    sum+=i;
}
console.log(sum);


//Continue
sum =0;
for(i=0; i<=20; i++){
    if(i%2!==0){
        continue;
    }
    sum+=i;
}
console.log(sum);