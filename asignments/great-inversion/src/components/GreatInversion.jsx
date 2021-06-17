import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
    border: 3px dotted yellowgreen;
    width: 25%;
    margin: 1rem auto;
    h2{
        color:blue;
        font-style: italic;
    }
    p{
        color:green;
    }
    
`;

const GreatInversion = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return (
        <StyledDiv>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>        
        </StyledDiv>
    );
}

export default GreatInversion;
