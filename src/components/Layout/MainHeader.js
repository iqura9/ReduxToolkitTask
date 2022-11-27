import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useDispatch} from "react-redux";
import {uiActions} from "../../store/ui_slice";

const MainHeader = (props) => {


    return (
        <header className={classes.header}>
            <h1>ReduxToolkitTask</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
