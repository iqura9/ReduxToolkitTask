import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart_slice";
import {memo} from "react";

const CartItem = (props) => {
    const {id, title, quantity, total, price} = props.item;
    const dispatch = useDispatch();
    const {addItemToCart, removeItemFromCart} = cartActions;
    const handleClick = (flag) => {
        const payload = {id};
        flag
            ? dispatch(addItemToCart(payload))
            : dispatch(removeItemFromCart(id))
    }
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={() => handleClick(false)}>-</button>
                    <button onClick={() => handleClick(true)}>+</button>
                </div>
            </div>
        </li>
    );
};

export default memo(CartItem);
