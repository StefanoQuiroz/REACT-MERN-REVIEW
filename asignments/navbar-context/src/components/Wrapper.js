import React, { createContext, useState } from 'react';

export const MyContext = createContext(); 

const Wrapper = ({children}) => {
    const [state, setState] = useState({
        name:""
    })
    return (
        <MyContext.Provider value={{state, setState}} >
            {children}
        </MyContext.Provider>
    );
}

export default Wrapper;
