import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

// useEffect will run once when app is loaded, causing our cart to be overwritten with an initial (empty) cart. This will block the cart from executing on initial load.
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible); // Access redux store, then ui reducer, then cartIsVisible state
  const cart = useSelector((state) => state.cart); // Creates subscription to redux store and accesses cart state
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]) //Effect will never re-run after initial app load

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch]); //Re-execute anytime our cart changes. Redux will ensure dispatch will never change, so dispatch will not trigger re-run - added to just get rid of warning.

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
