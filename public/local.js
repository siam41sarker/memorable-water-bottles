const getFromLocalStorage = ()=>
    {
        const storedItem = localStorage.getItem('cart');
        if(storedItem)
            return (JSON.parse(storedItem));
        else
            return [];
    }
const setToLocalStorage = id =>
    {
        const cart = getFromLocalStorage();
        cart.push(id);
        setMain(cart);
    }
const setMain = data =>
        {
            const cart = JSON.stringify(data);
            localStorage.setItem('cart',cart);
        }
const removeFromLS = id =>
    {
        const cart = getFromLocalStorage();
        const remaining = cart.filter(eachId => eachId!==id);
        setMain(remaining)
    }
export {setToLocalStorage,getFromLocalStorage,removeFromLS};