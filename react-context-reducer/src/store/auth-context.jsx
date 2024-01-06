import { createContext } from "react";

//object what will contain a component
const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => { }
})

export default AuthContext