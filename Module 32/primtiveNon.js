// strongly typed Language
// int a = 5 5;
// string b = 'alim halim khalim';
// bool с = True;
//                  mahbubsarwar5@gmail.com
// object name: 'noya dhman', id: 55}
// int[] numbers s = [12, 45, 78
// string[] friends = [ abul`, 'babul';
                                        T
// JS is a dynamic type Language
//Primitive
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;

//Non-primitive: Multiple Value
const ages = [45, 65, 48];
const student = {id: 23, class: 7}

console. log(typeof а, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;  //Y refering x's value in the memory
console.log(x, y);

y = 7;  //Just reassigning
console.log(x, y);

let p = {job: 'web developer'}
let q = p;

q.job = 'Front end';    //Changing the job field but the q was taken from p so the value of p will also change
console.log(p, q);

q = {job: 'Backend end'}    //Reassigning the value of q
console.log(p, q);

