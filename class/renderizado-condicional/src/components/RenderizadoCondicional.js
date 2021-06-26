import React, { useState } from 'react';

const RenderizadoCondicional = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {userName, email, password};
        console.log(data);
        setHasBeenSubmitted(true)
        setUserName("");
        setEmail("");
        setPassword("");
        
    }
    /*
    const submitHandle = () => {
        //If statement
        /* if(hasBeenSubmitted){
            return `Thank you for submitting the form!`;
        } else {
            return `Welcome, please submit the form`;
        }
        // Ternary Operator
        //return (hasBeenSubmitted) ? `Thank you for submitting the form!` : `Welcome, please submit the form`;
    }
    */

    return (
        <form onSubmit={onSubmit}>
            {/* <h3>{submitHandle()}</h3> */}
            {
                (hasBeenSubmitted) ? <h3>Thank you for submitting the form!</h3> : <h3>Welcome, please submit the form!</h3>
            }
            <div className="row">
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" value={userName} onChange={(event) => setUserName(event.target.value) }/>
            </div>
            <div className="row">
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
            </div>
            <div className="row">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <input type="submit" value="Send"/>
        </form>
    );
}

export default RenderizadoCondicional;
