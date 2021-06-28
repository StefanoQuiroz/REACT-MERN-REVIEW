import React, { useState } from 'react';

const MessageForm = ({funcMsg}) => {
    
    const [msg, setMsg] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({1:msg});
        // (1) llamamos este prop funcion con el (argumento msg que toma el input)
        funcMsg(msg);
    }

    return (
        <>
            <h1>Set Message</h1>
            <form onSubmit={onSubmit}>
                <textarea name="mesg" cols="50" rows="4" placeholder="Enter your message here" value={msg} onChange={event => setMsg(event.target.value)}></textarea>
                <input type="submit" value="Send Message"/>
            </form>

            
        </>
    );
}

export default MessageForm;
