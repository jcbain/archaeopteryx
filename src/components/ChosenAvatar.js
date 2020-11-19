import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tweet } from 'react-twitter-widgets'

import useAvatarHover from '../hooks/useAvatarHover';

const ContainerDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr .5fr;
    grid-template-columns: 0.5fr 1fr;
    grid-template-areas:
        "avatar tweet"
        "avatar button";
    align-items: center;
`

const AvatarImg = styled.img`
    grid-area: avatar;
    height: 100%;
    /* height:  40%; */
`;

const CollectButton = styled.button`
    grid-area: button;
    background: ${ props => props.theme.primaryBlue };
    color: ${props => props.theme.primaryWhite};
    font-family: 'Archivo Black', sans-serif;
    border: 0px;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 10px;
    outline: none;
    width: 50%;
    height: 50px;
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
        <ContainerDiv>
            <AvatarImg src={`/assets/sprites/${name}0${imgIndex}.png`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
             />
             <div style={{width: "50%"}}>
                 {recentTweet && <Tweet tweetId={recentTweet.id} />}
             </div>
             <CollectButton onClick={handleClick}>get those tweets</CollectButton>

        </ContainerDiv>
    )
}

export default ChosenAvatar;