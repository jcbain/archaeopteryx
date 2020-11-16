import React from 'react';
import styled from 'styled-components';

import GrabberButton from './GrabberButton';

const GrabberContainer = styled.div`
    width: 90%;
    height: 80vh;
    padding: 5%;
`

const Grabbers = props => {
    const { data } = props;

    const textIds = [
        {id: 1, name: 'Obama', imgNums: 3},
        {id: 2, name: 'Trump', imgNums: 3},
        {id: 3, name: 'Harris', imgNums: 2}
    ]

    const collectionButtons = data.map( d => {
        const text = textIds.find( t => t.id === d.id );
        const name = text.name
        return (
            <GrabberButton key={d.id} identifier={d.id} name={name} imgNums={text.imgNums} />
        )
    })

    return (
        <GrabberContainer>
            {collectionButtons}
        </GrabberContainer>
    )
}

export default Grabbers;