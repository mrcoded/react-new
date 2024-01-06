import { useState, createContext, useEffect } from "react";

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        //fn runs once if no dependency is set to prevent re rendering
        const storedLoggedIn = localStorage.getItem("isLoggedIn")

        if (storedLoggedIn === '1') {
            setIsLoggedIn(true)
        }

    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1")
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>{props.children}</AuthContext.Provider>
    )
}

//object what will contain a component
const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})

export default AuthContext

