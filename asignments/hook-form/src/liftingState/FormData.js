import React from 'react';

const FormData = ({results}) => {
    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {results.firstName}</p>
            <p>Last Name: {results.lastName}</p>
            <p>Email: {results.email}</p>
            <p>Password: {results.password}</p>
            <p>Confirm Password: {results.confirmPassword}</p>
        </div>
    );
}

export default FormData;
