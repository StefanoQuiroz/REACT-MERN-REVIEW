import React from 'react';

const MessageDisplay = ({message}) => {
    return (
        <div>
            <h1>Current Message</h1>
            <pre>{message}</pre>            
        </div>
    );
}

export default MessageDisplay;
