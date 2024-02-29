//SetTimeout results one time after certain seconds and uses function
//Can be cleared using clearTimeout

const timeout = setTimeout(() => {
    console.log('My name is Mahbub');
}, 5000)    // this will run after 5seconds

// clearTimeout(timeout);
//to clear the timeout store the settimeout in a variable and use that variable inside the setTimeout

//SetInterval continuously increases after the each seconds mentioned
let roll = 1;
const Interval = setInterval(()=> {
    console.log("Roll Number:", roll);
    roll++; //the roll will increase each time

    if(roll>=32){
        clearInterval(Interval);    //will stop when roll number is 32
    }
}, 1000)