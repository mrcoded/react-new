import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {


  return (
    <>
      <AuthContext.Provider value={{ onLogout: logoutHandler, isLoggedIn: isLoggedIn }}>
        {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider >
    </>
  );
}

export default App;
