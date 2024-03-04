const storeItem = () => {
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    showItem(product, quantity);
    saveCart(product, quantity);
}

const showItem = (product, quantity) => {
    const listItems = document.getElementById('container');
    const list = document.createElement('li');
    list.innerText = `${product}: ${quantity}`;
    listItems.appendChild(list);
}

// Collecting Cart items from the localStorage
const cartItems = () => {
    let cart = {};
    const cartItems = localStorage.getItem('cart');
    if(cartItems){
        cart = JSON.parse(cartItems);
    }
    return cart;
}

const saveCart = (product, quantity) => {
    let cart = cartItems();
    cart[product] = quantity;
    let savedJSON = JSON.stringify(cart);
    localStorage.setItem('cart', savedJSON)
}

const showData = () => {
    const items = cartItems();
    for(const item in items){
        showItem(item, items[item])
    }
}

showData();