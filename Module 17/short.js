let mahbubIsRich = true;
let mahbubHaveMoney = false;

//Now instead providing condition mahbubIsRich = true only mahbubIsRich will work

if (mahbubIsRich) {
    console.log("This is a lie");
}
else {
    console.log('Stop Dreaming');
}

//To work false condition without saying it is false in the if, use !

if (!mahbubHaveMoney) { //This denots not true and mahbubHaveMoney is false so not true = false and thus resulted yeah its true
    console.log("Yeah its True");
}
else {
    console.log('Sleep Bro');
}
