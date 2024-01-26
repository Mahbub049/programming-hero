const weight = 90;
const height = 1.8288;
const bmi = weight/(height)**2;

if(bmi<16.00){
    console.log("Underweight Severe");
}
else if(bmi>=16.00 && bmi <=16.99){
    console.log("Underweight Moderate");
}
else if(bmi>=17.00 && bmi <=18.49){
    console.log("Underweight Mild");
}
else if(bmi>=18.50 && bmi <=24.99){
    console.log("Normal");
}
else if(bmi>=25.00 && bmi <=29.9){
    console.log("Overweight");
}
else if(bmi>=30.00 && bmi <=34.99){
    console.log("Obese Class I");
}
else if(bmi>=35.00 && bmi <=39.99){
    console.log("Obese Class II");
}
else if(bmi>=40.00){
    console.log("Obese Class III");
}
