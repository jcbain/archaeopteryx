import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const GrabberContainer = styled.div`
    /* height: 10vh; */
    padding: 1%;
    height: 100%;
`

const Avatars = props => {
    const  { data, textIds } = props;

    const collectionButtons = data.map( d => {
        const text = textIds.find( t => t.id === d.id );
        const name = text.name
        return (
            <Avatar key={d.id} identifier={d.id} name={name} imgNums={text.imgNums} />
        )
    })

    return (
        <GrabberContainer>
            { collectionButtons }
        </GrabberContainer>
    )
}

export default Avatars;