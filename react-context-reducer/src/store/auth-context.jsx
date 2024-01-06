import { createContext } from "react";

//object what will contain a component
const AuthContext = createContext({
    isLoggedIn: false
})

export default AuthContext