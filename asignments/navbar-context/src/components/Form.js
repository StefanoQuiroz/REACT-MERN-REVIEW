import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from './Wrapper';

const StyledForm = styled.form`
    //outline: 1px solid red;
    width: 90%;
    margin: 0 auto;
    height: 5rem;
    display: flex;
    align-items: center;

`;

const StyledContainer = styled.div`
    //outline: 1px solid red;
    display: flex;
    align-items: center;
    width: 90%;
    margin-left: 2.5%
    `;

const StyledLabel = styled.label`
    //outline: 1px solid red;
    width: 13%;
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const StyledInput = styled.input`
    //outline: 1px solid red;
    height: 3rem;
    width: 50%;
    display: flex;
    align-items: center;
    border-radius: 9px;
    background-color: #efefef;
    border-style: none;
    padding-left: 1.2rem; 
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #a8a8a8;

    :focus{
        outline: none;
        padding-left: 1.2rem; 
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #a8a8a8;
    }
`;

const Form = () => {
    const {state, setState} = useContext(MyContext)
    
    const onChange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name] : value
        })
    }

    return (
        <StyledForm>
            <StyledContainer>
                <StyledLabel htmlFor="name">Your Name: </StyledLabel>
                <StyledInput type="text" id="name" name="name" value={state.name} onChange={onChange}/>
            </StyledContainer>            
        </StyledForm>
    );
}

export default Form;
