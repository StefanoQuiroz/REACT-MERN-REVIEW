import React, { useState } from 'react';

const MoreForms = () => {
    
    const [inputs, setInputs ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const {firstName, lastName, email, password, confirmPassword} = inputs;

    return (
        <>
            <form>
                <h2>Form</h2>
                <div className="row"> 
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={onChange}/>
                    {
                        (inputs.firstName.length > 0 && inputs.firstName.length < 2 ) ? <p>The field must have at least 2 characters</p> : ''
                    }
                </div>
                <div className="row">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={onChange}/>
                    {
                        (inputs.lastName.length > 0 && inputs.lastName.length < 2) ? <p>The field must have at least 2 characters</p> : ''
                    }
                </div>
                <div className="row">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" value={email} onChange={onChange}/>
                    {
                        (inputs.email.length > 0 && inputs.email.length < 5) ? <p>The field must have at least 5 characters</p> : ''
                    }
                </div>
                <div className="row">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" value={password} onChange={onChange}/>
                    {
                        (inputs.password.length > 0 && inputs.password.length < 8) ? <p>The field must have at least 8 characters</p> : ''
                    }
                </div>
                <div className="row">
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="password" id="confirm" name="confirmPassword" value={confirmPassword} onChange={onChange}/>
                    {
                        (!(inputs.password.includes(inputs.confirmPassword))) ? <p>Passwords must be the same</p> : ""
                    }
                </div>
            </form>

            <div className="form-data">
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
}

export default MoreForms;
