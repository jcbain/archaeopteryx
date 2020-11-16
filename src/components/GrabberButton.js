import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
    color: white;
    width: 20vw;
    height: 10vh;
    background: palevioletred;
    border: 0px solid palevioletred;
    font-size: 20px;
    text-decoration: none;
    /* clip-path: polygon(  
        0 5%,
        5% 5%,
        5% 0,
        90% 0,
        100% 10%,
        100% 90%,
        90% 100%,
        10% 100%,
        0% 90%,
        0% 10%) */
`

const GrabberButton = props => {
    const { identifier, name } = props;

    const handleClick = e => {
        e.preventDefault();
        axios.post(`/${identifier}`, { name: name})
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }


    return (
        <Button onClick={handleClick}>{name}</Button>
    )

}

export default GrabberButton;

