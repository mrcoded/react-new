import { useState, useEffect } from "react";

const useCounter = (fwd = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (fwd) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);

            }
        }, 1000);

        return () => clearInterval(interval);
    }, [fwd]);

    return counter
}
export default useCounter