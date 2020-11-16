import React from 'react';
import styled from 'styled-components';

import GrabberButton from './GrabberButton';

const GrabberContainer = styled.div`
    width: 90%;
    height: 80vh;
    border: 3px solid black;
    border-radius: 5px;
    padding: 5%;
`

const Button = styled.button`
    color: palevioletred;
    width: 20vw;
    height: 10vh;
    background: white;
    border: 4px solid palevioletred;
    font-size: 20px;
    border-radius: 3px;
    text-decoration: none;
`

const Grabbers = props => {
    const { data } = props;

    const textIds = [
        {id: 1, name: 'Obama'},
        {id: 2, name: 'Trump'},
        {id: 3, name: 'Harris'}
    ]

    const collectionButtons = data.map( d => {
        const text = textIds.find( t => t.id === d.id );
        const name = text.name
        return (
            <GrabberButton key={d.id} identifier={d.id} name={name} />
        )
    })

    return (
        <GrabberContainer>
            {collectionButtons}
        </GrabberContainer>
    )
}

export default Grabbers;