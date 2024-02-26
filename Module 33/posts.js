fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts => show(posts))


function show(posts){
    const div = document.getElementById('container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        const list = ['bg-blue-400', 'p-5'];
        postDiv.classList.add(...list)
        postDiv.innerHTML = `
            <h2 class="text-3xl font-bold pb-5">${post.userId}</h2>
            <h4 class="text-xl font-semibold">${post.title}</h4>
            <p>${post.body}</p>
        `;
        div.appendChild(postDiv);
    }
}