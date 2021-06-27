import React from 'react';

const MessageForm = ({msg, setMsg}) => {
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log({msg});
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
