import React, { useState } from 'react';
import InputForm from './InputForm';
import FormData from './FormData';

const Wrapper = () => {
    const [state, setState] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
      })
    return (
        <div>
            <InputForm inputs={state} setInputs={setState}/>
            <FormData results={state}/>
        </div>
    );
}

export default Wrapper;
