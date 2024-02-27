import { useState, createContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA020MFBPZU7kU6LSSQgjFgFjmF02tHByg",
  authDomain: "react-auth-33ca1.firebaseapp.com",
  projectId: "react-auth-33ca1",
  storageBucket: "react-auth-33ca1.appspot.com",
  messagingSenderId: "546455570923",
  appId: "1:546455570923:web:ed5d2bca75c4c12e2571ae"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log(auth);

const AuthContext = createContext({
  user: "",
  setUser: "",
  // loading: false
  // token: "",
  isLoggedIn: false,
  // login: (user) => { },
  // logout: () => { }
});

export const AuthContextProvider = (props) => {
  // const [token, setToken] = useState(null);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true)

  // !!token returns true if token is false and vice versa
  const userIsLoggedIn = !!user;
  // const userIsLoggedIn = !!token;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      if (currentUser) setUser(currentUser)
      else { setUser(null) }
      // if (user) {
      //   const idToken = user.getIdToken();
      //   setToken(idToken);
      // } else {
      //   setToken(null);
      // }
    });

    return () => {
      // unsubscribe;
      if (unsubscribe) unsubscribe();
    }
  }, []);

  // const loginHandler = () => {
  //   if (user) {
  //     setUser(user);
  //     console.log(user);
  //   } else {
  //     console.log("no token found");
  //   }
  // }

  // const logoutHandler = () => {
  //   setToken(null);
  // }

  const contextValue = {
    // token: token,
    isLoggedIn: userIsLoggedIn,
    // login: loginHandler,
    // logout: logoutHandler
    user: user,
    setUser: setUser
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}


export default AuthContext;