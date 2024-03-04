import Cart from './componentb/Cart/Cart';
import Layout from './componentb/Layout/Layout';
import Products from './componentb/Shop/Products';

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
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

