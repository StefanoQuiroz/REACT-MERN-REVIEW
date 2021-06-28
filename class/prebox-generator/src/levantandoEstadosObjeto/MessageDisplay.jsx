import React from 'react';

const MessageDisplay = ({inputFormDisplay}) => {
    const {firstName, lastName, email} = inputFormDisplay;
    return (
        <div>
            <h2>Message Display </h2>
            <p>First-Name: {firstName}</p>
            <p>Last-Name: {lastName}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default MessageDisplay;
