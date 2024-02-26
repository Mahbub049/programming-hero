function fetching(){
    fetch('https://jsonplaceholder.typicode.com/users') //Fetching from the link
    .then(response => response.json()) //converting the json string into JS Object
    .then(json => console.log(json))
}