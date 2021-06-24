import React from 'react';

const InputForm = ({inputs, setInputs}) => {
    const onChange = (event) => {
        const name=event.target.name;
        const value=event.target.value;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const {firstName, lastName, email, password, confirmPassword} = inputs;
    return (
        <form>
            <h2>Form</h2>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={password} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="confirm">Confirm Password: </label>
                <input type="password" id="confirm" name="confirmPassword" value={confirmPassword} onChange={onChange}/>
            </div>
        </form>
    );
}

export default InputForm;
