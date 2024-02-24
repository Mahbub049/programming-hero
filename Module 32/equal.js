//comparison using == and ===
//Always use ===
// === compare both type and value and == only the value

// const a = 0; equal (both)
// const b = 0;

// const a = 0;
// const b = false;    equal in == but not equal in ===

// const a = 1;
// const b = true;    equal in == but not equal in ===

// const a = '1';
// const b = 1    equal in == but not equal in ===

// const a = [10,20];
// const b = [10,20];   Not equal because array are compared using reference in the memory (both)

// const a = [10,20];
// const b = a;   Equal as both referencing to the same memory location (both)

// const a = {};
// const b = {};   Not equal because array are compared using reference in the memory (both)

// const a = {};
// const b = a;   Equal as both referencing to the same memory location (both)

if(a === b){
    console.log('They are equal');
}
else{
    console.log('They are not equal');
}

