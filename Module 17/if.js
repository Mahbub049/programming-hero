/* if always executes when the condition inside if is true
 * if the condition inside the if is not true it goes to the else section
 * We can write code without if, in that case if false it will not print anything*/

var price = 340;
if(price >=350){
    console.log("watch movie"); //This will not execute as 340 is not large than 350
}
else{
    console.log("sleep");
}

// && can be used when both of the conditions must be true
// || can be used when one of the conditions has to be true
//using || and && complex condition can be created

//Const is kind of variable similar to var but you can not redeclare it
const SSC = 'A+';
const HSC = 'A+';
//income = 42; //not allowed

if(SSC=='A+' && HSC=='A+'){ //Both have to be true
    console.log('Eligible to admit');
}
else{
    console.log('Not eligible');
}

if(SSC=='A+' || HSC=='A-'){ //At least one have to be true
    console.log('Eligible to admit');
}
else{
    console.log('Not eligible');
}

// Complex
if((SSC=='A+' && HSC=='A+')||price>=300){ //SSC and HSC both have to be true and between the true and price condition one have to be true
    console.log('Admit him');
}
else{
    console.log('Not eligible');
}