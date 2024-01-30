//If there are two words or sentenses that needs to be compared but one of them is uppercase and another one is lowercase, it will be considered as different sentense. But actually they are not. In that case, to compare use, toUpperCase or toLowerCase to convert the letters into up or low case.

let BigName = "MUHAMMAD MAHBUB SARWAR SHAFI"; //upper
let SmallName = "muhammad mahbub sarwar shafi" //lower

console.log(BigName === SmallName); //false

//Now it will work
if(BigName.toLowerCase() === SmallName.toLowerCase()){
    console.log("Yes its Mahbub");
}
else{
    console.log("Not both Mahbub");
}

//Sometimes there can be space before or after text in the string. This can be removed using trim(). Then if we compare two different sentence it will match

let Sen1 = "    Mahbub";    //Space Before
let Sen2 = "Mahbub    ";    //Space After

//They will match
if(Sen1.trim() === Sen2.trim()){
    console.log("They Matched");
}
else{
    console.log("They didn't matched");
}