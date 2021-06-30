import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from './Wrapper';

const StyledNav = styled.nav`
    //outline: 1px solid red;
    background-color: #8c44cf;
    height: 5rem;
    width: 90%;
    box-sizing: border-box;
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 450;
    color: #fff;
`;

const NavBar = () => {
    const {state} = useContext(MyContext)
    return (
        <StyledNav>Hi {state.name}!</StyledNav>
    );
}

export default NavBar;
