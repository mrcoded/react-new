import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = async () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://reacthttpv2-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!")
      }

      const data = await response.json()
      return data;
    }

    try {
      const cartData = await fetchData();
      // dispatch(cartActions.replaceCart(cartData))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Fetching cart data failed!"
      }));
    }
  }
}

//action creator thunks
export const sendCartData = (cart) => {
  return async (dispatch) => {
    //thunk is a function that delays an action until later
    //thunk is a action creator does not return the action itself but another 
    //function that eventually returns the action.

    dispatch(uiActions.showNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending cart data!"
    }));

    //Handle errors
    const sendRequest = async () => {
      const response = await fetch('https://reacthttpv2-default-rtdb.firebaseio.com/cart.json',
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!")
      }
    }

    try {
      await sendRequest()

      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sucessfully sent cart data!"
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data failed!"
      }));
    }
  };
}