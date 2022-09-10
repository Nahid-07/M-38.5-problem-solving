const getInputValue =(id)=>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProducts = ()=>{
    const product = getInputValue('product-name-Field');
    const quantity = getInputValue('quantity-Field');
    // localStorage.setItem(product,quantity);
    saveItemToTheLocalStorage(product,quantity)
    // displayProduct(product,quantity)
    // displayStoredProduct()
    location.reload()
}
const getItemFromLocalStorage =()=>{
    const savedCart = localStorage.getItem('cart');
    // console.log(savedCart)
    let cart = {};
    console.log(cart)
    if(savedCart){
        console.log(savedCart)
        cart = JSON.parse(savedCart);
    }
    return cart
    // console.log(savedCart)
}
const saveItemToTheLocalStorage = (product,quantity)=>{
    const cart = getItemFromLocalStorage();
    cart[product] = quantity;
    const stringify = JSON.stringify(cart);
    localStorage.setItem('cart',stringify)
}
const displayProduct = (product,value)=>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${value}`;
    productContainer.appendChild(li);
}
const displayStoredProduct = () =>{
    const product = getItemFromLocalStorage()
    for(let products in product){
        const quantity = products[product]
        displayProduct(products,quantity)
    }
} 
displayStoredProduct()