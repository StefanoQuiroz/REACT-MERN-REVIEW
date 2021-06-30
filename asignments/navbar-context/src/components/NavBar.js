import React, { useContext } from 'react';
import { MyContext } from './Wrapper';
const NavBar = () => {
    const {state} = useContext(MyContext)
    return (
        <nav>Hi {state.name}!!</nav>
    );
}

export default NavBar;
