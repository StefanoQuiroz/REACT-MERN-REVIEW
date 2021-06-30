import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from './Wrapper';

const StyledForm = styled.form`

`;

const StyledContainer = styled.div`

`;

const StyledLabel = styled.label`

`;

const StyledInput = styled.input`

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
