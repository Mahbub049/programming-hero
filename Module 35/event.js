// function a(){
//     console.log('a');
//     b();
//     console.log('aa')
// }

// function b(){
//     console.log('b');
//     c();
//     console.log('bb');
// }

// function c(){
//     console.log('c');
//     console.log('cc');
// }

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(Response => Response.json())
// .then(data => console.log(data));
// a();

async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
   }
   f();