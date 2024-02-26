function showDetails(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(request => request.json())
        .then(users => Details(users))
}

function Details(users){
    const ul = document.getElementById('details');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = user.username;
        ul.appendChild(li);
    }
}