import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { getFromLocalStorage, removeFromLS, setToLocalStorage, } from "../../../public/local";
import Cart from "../../Cart/Cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    const url = "bottles.json";
    fetch(url)
      .then((fetched) => fetched.json())
      .then((data) => setBottles(data))
      .catch((e) => console.log(e));
  }, []);
  useEffect(()=>
      {
        console.log("Loaded: "+bottles.length);
        if(bottles.length)
          {
              const gotDataFromDatabase = getFromLocalStorage();
              console.log(gotDataFromDatabase);
              console.log(bottles);
              const addedCartValue = [];
              for(const id of gotDataFromDatabase)
                {
                  console.log(id);
                  const filteredCartData = bottles.find(bottle =>(bottle.id === id));
                  addedCartValue.push(filteredCartData);
                  console.log(filteredCartData);
                  console.log(addedCartValue);
                  setCart(addedCartValue);
                }
          }

      },[bottles])
  const handleBottle = (bottleItem)=>
        {
          console.log(bottleItem);
          setToLocalStorage(bottleItem.id)
          const newCart = [...cart,bottleItem];
          setCart(newCart);
         
        }
  const removeItemFromCart = id =>
      {
          removeFromLS(id);
          const remaining = cart.filter(each=>each.id !== id);
          setCart(remaining);
      }
  return (
    <div>
      <div className="heading_portion">
          <h3>Bottles Available: {bottles.length} </h3>
          <Cart selectedCart={cart} removeItemFromCart={removeItemFromCart}></Cart>
          <hr />
      </div>
      <div className="bottles-container">
        {bottles.map((eachBottle) => (
          <Bottle key={eachBottle.id} bottle={eachBottle} handleBottle={handleBottle}></Bottle>
        ))}
      </div>
    </div>
  );
};
export default Bottles;
