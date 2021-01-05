import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import { Plus } from '@styled-icons/bootstrap'
import {Plus, Minus} from '@styled-icons/fa-solid'

import useAvatarHover from '../hooks/useAvatarHover';
import Tweets from './Tweets';

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
    height: 50%;
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

const TimeCollectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    font-family: 'Fredoka One', cursive;
    color: ${({ theme }) => theme.primaryBlue};
    font-size: 1.5em;
`

const StyledPlus = styled(Plus)`
  color: ${({ theme }) => theme.primaryRed};
  width: 50px;
`

const StyledMinus = styled(Minus)`
  color: ${({ theme }) => theme.primaryRed};
  width: 50px;
`


const ChosenAvatar = props => {
    const { selectedAvatar, textIds } = props;
    const { id, query } = selectedAvatar;
    const metaData = textIds.find(d => d.id === id);
    const name = metaData.name.toLowerCase()
    const { setHover, imgIndex } = useAvatarHover(metaData.imgNums);
    const [ recentTweets, setRecentTweets ] = useState([])
    const [ tweetIndex, setTweetIndex ] = useState(0)
    const [ tweetLength, setTweetLength ] = useState(0)
    const [ hours, setHours ] = useState(1);

    const incrementHours = () => {
        if ( hours < 73 ) {
            setHours(prev => prev + 1);
        }
    }

    const decrementHours = () => {
        if ( hours >= 1 ) {
            setHours(prev => prev - 1);
        }
    }

    const runCollection = e => {
        e.preventDefault();
        axios.post(`/${id}`, {hours: hours, query: query})
            .then(resp => 'sent')
    }

    return (
        <ContainerDiv>
            <AvatarImg src={`/assets/sprites/${name}0${imgIndex}.png`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
             />
             <TimeCollectionDiv>
                 <p>{`run collection for ${hours} ${hours > 1 ? 'hours' : 'hour'}`}</p>
                 {/* <Plus /> */}
                 <StyledPlus onClick={incrementHours}/>
                 <StyledMinus onClick={decrementHours}/>
             </TimeCollectionDiv>
             {/* { recentTweets.length > 0 && <Tweets data={recentTweets} selectedTweetIndex={tweetIndex} next={next} previous={previous}/> } */}
             <CollectButton onClick={runCollection}>get those tweets</CollectButton>

        </ContainerDiv>
    )
}

export default ChosenAvatar;