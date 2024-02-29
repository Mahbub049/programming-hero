const newLoader = () => {
    return new Promise((resolved, rejected) =>{
        const success = Math.random();
        if(success<0.5){
            resolved(success);
        }
        else{
            rejected(success)
        }
    } )
}

newLoader()
.then (data => console.log('resolved data: ', data))
.catch (data => console.log('rejected data: ', data))


//Async
//Fetch
fetch('')
.then(response=>response.json())
.then(data=>console)

//async
const asynchronous = async() => {
    const response = await fetch('')
    const data = await response.json();
}