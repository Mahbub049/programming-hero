const storage = () =>{
    let key = document.getElementById('key').value;
    let value = document.getElementById('value').value;
    console.log(key, value)
    localStorage.setItem(key, value);
    key = ``;
    value = ``;
}

