import PropTypes from 'prop-types';
import { useState } from 'react';
import './Bottle.css'
const Bottle = ({bottle,handleBottle}) => {
    const {name,img,price} = bottle;
    const [isDisable,setIsDisable] = useState(false)
    const handleBottleFunc = ()=>
            {
                handleBottle(bottle);
                setIsDisable(true);
            }
    return (
        <div className="bottle-container">
            <p>Bottle: {name} </p>
            <img src={img} alt="" />
            <p>price: ${price}</p>
            <button disabled={isDisable} className={isDisable?'btn-disabled': 'btn-purchase'} onClick={handleBottleFunc}>{isDisable?'Purchased':'Purchase'}</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleBottle: PropTypes.func.isRequired
}
export default Bottle;