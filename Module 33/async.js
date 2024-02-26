function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error("Something is wrong", error))
}

const loadData1 = async() =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();
        console.log(data)
    }
    catch{
        console.error("Something is wrong")
    }
}