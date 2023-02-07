import { createContext, useState } from "react";

const BookskContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        },
    };

    return (
        <BookskContext.Provider value={valueToShare}>
            {children}
        </BookskContext.Provider>
    )
}

export { Provider }
export default BookskContext;