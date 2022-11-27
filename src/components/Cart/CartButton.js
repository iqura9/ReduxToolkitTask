import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui_slice";

const CartButton = (props) => {
    const {totalQuantity} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const {toggle} = uiActions;
    const handleClick = () => {
        dispatch(toggle());
    }
    return (
        <button className={classes.button} onClick={handleClick}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
        </button>
    );
};

export default CartButton;
