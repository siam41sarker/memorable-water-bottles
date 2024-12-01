import PropTypes from 'prop-types';
import './cart.css'
const Cart = ({selectedCart,removeItemFromCart}) => {
    console.log(selectedCart)
    return (
        <div>
             <h4>Cart: {selectedCart?.length}</h4>
             <div className="cart-img-Container">
                {selectedCart.map((each,index)=><div key={index} >
                    <img src={each?.img} alt="" />
                    <br></br>
                    <small><button style={{
                        backgroundColor: 'black',
                        color: 'white',
                        marginBottom: '5px'
                    }} onClick={()=>removeItemFromCart(each.id)}>Remove</button></small>
                </div>
                )}
             </div>
        </div>
    );
};
Cart.propTypes = {
    selectedCart: PropTypes.array.isRequired,
    removeItemFromCart: PropTypes.func.isRequired
}
export default Cart;