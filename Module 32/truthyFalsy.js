// Truthy:
//  1. true
//  2. any number (+ve, -ve) will be truthy other than 0
//  3. any string other than empty string
//  4. '0', 'false'
//  5. {}
//  6. []

//  Falsy:
//  1. false
//  2. 0
//  3. '' (empty string)
//  4. undefined
//  5. null

// we can check using:
const text = '';
if(!text){
  console.log('Falsy');
}

const text2 = []
if(!!text2){
  console.log('Truthy');
}