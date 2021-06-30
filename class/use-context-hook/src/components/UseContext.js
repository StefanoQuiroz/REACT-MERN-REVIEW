import React, { useContext } from 'react';
import { MyComponent } from '../App';
const UseContext = () => {

    const takeValue = useContext(MyComponent);

    return (
        <div>
            <p>{takeValue.setState(3)}</p>    
            <p>{takeValue.state}</p>    
        </div>
    );
}

export default UseContext;
