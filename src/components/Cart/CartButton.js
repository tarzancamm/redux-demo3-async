import { useDispatch, useSelector } from 'react-redux';
import {uiActions} from '../../store/ui-slice'
import classes from './CartButton.module.css';


const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.totalQuantity) // Access 'cart' because that's what we named it in index.js redux store

  // Auto generated actions are action creator methods that need to be exectued. When executed they return action objects, which we dispatch here.
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
