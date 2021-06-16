import React from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';

const StyledBox = styled.div`
    border: 1px solid lightgray;
    background-color: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    margin: 1.5rem auto;
`;

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

//export default StyledBox;

const Box = () => {
    return (
        <div>
            <StyledBox bgColor={"blue"}/>    
            <StyledBox bgColor={"red"} height={"500px"} width={"500px"}/>
            <Button
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="noopener"
            primary
            >
            GitHub
            </Button>

            <Button as={Link} href="/docs">
            Documentation
            </Button>    
        </div>
    );
}

export default Box;
