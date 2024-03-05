import { useEffect } from 'react';
import Cart from './componentb/Cart/Cart';
import Layout from './componentb/Layout/Layout';
import Products from './componentb/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './storeb/ui-slice';
import Notification from './componentb/UI/Notification';

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  let isInitial = true;

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!"
      }));

      const response = await fetch(
        'https://reacthttpv2-default-rtdb.firebaseio.com/cart.json',
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );

      console.log(response);
      if (!response.ok) {
        throw new Error("Sending cart data failed!")
      }

      // const resData = await response.json();

      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sucessfully sent cart data!"
      }));
    }

    //for one time request executiom
    if (isInitial) {
      isInitial = false;
      return
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data failed!"
      }));

    })
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

//*************Components A*************/
// import Counter from './components/Counter';
// import Auth from './components/Auth'
// import Header from './components/Header'
// import UserProfile from './components/UserProfile'
// import { useSelector } from 'react-redux';

// function App() {
//   const isAuth = useSelector(state => state.auth.isAuth)

//   return (
//     <>
//       <Header />
//       {!isAuth && <Auth />}
//       {isAuth && <UserProfile />}
//       <Counter />
//     </>
//   );
// }

// export default App;

