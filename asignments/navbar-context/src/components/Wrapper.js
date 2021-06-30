import React, { createContext, useState } from 'react';

export const MyContext = createContext(); 

const Wrapper = () => {
    const [state, setState] = useState({
        name:""
    })
    return (
        <MyContext.Provider >
            
        </MyContext.Provider>
    );
}

export default Wrapper;
