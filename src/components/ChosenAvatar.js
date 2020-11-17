import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import useAvatarHover from '../hooks/useAvatarHover';

const AvatarImg = styled.img`
    height: 100%;
    /* height:  40%; */
`;

const CollectButton = styled.button`
    background: ${ props => props.theme.primaryBlue };
    color: ${props => props.theme.primaryWhite};
    font-family: 'Archivo Black', sans-serif;
    border: 0px;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 10px;
    outline: none;
`

const ChosenAvatar = props => {
    const { selectedAvatar, textIds } = props;
    const { id, query } = selectedAvatar;
    const metaData = textIds.find(d => d.id === id);
    const name = metaData.name.toLowerCase()
    const { setHover, imgIndex } = useAvatarHover(metaData.imgNums);
    const [ recentTweet, setRecentTweet ] = useState(null)

    const handleClick = e => {
        e.preventDefault();
        axios.post(`/${id}`, {query: query, jobId: id})
            .then(resp => setRecentTweet(resp.data))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <AvatarImg src={`/assets/sprites/${name}0${imgIndex}.png`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
             />
             <div>
                 {recentTweet && <p>{recentTweet.text}</p>}
             </div>
             <CollectButton onClick={handleClick}>get those tweets</CollectButton>

        </div>
    )
}

export default ChosenAvatar;