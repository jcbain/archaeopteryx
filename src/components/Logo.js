import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div`
    background: ${({theme}) => theme.primaryRed};
    color: ${({theme}) => theme.primaryWhite};
    font-family: 'Fredoka One', cursive;
    font-size: 2em;
    width: 8%;
    padding: 0.5em;
    border-radius: 4px;
`;

const Logo = props => {

    return (
        <LogoDiv>
            archa
            <br/>
            eopte
            <br/>
            ryx
        </LogoDiv>
    )
}

export default Logo;