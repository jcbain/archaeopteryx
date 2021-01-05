import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import { Plus } from '@styled-icons/bootstrap'
import {Plus, Minus} from '@styled-icons/fa-solid'

import useAvatarHover from '../hooks/useAvatarHover';
import Tweets from './Tweets';

const ContainerDiv = styled.div`
    display: grid;
    grid-template-areas: 
        "avatar modal";
    grid-template-columns: 1fr 1fr;
    width: 100%;
    align-items: center;
`

const AvatarImg = styled.img`
    grid-area: avatar;
    width: 100%;
`;

const ModalDiv = styled.div`
    width: 90%;
    padding: 5%;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${({ theme }) => theme.primaryBlue};

`

const CollectButton = styled.button`
    grid-area: button;
    background: ${ props => props.theme.primaryRed };
    color: ${props => props.theme.primaryWhite};
    font-family: 'Archivo Black', sans-serif;
    border: 0px;
    border-radius: 5px;
    font-size: 1em;
    padding: 10px;
    outline: none;
    width: 100%;
    height: 50px;
`

const TimeCollectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-family: 'Fredoka One', cursive;
    color: ${({ theme }) => theme.primaryTan};
    font-size: 1em;
`

const StyledPlus = styled(Plus)`
  color: ${({ theme }) => theme.primaryRed};
  width: 25px;
`

const StyledMinus = styled(Minus)`
  color: ${({ theme }) => theme.primaryRed};
  width: 25px;
`

const StyledLabel = styled.label`
    font-family: 'Fredoka One', cursive;
`

const StyledInput = styled.input`
    color: ${({ theme }) => theme.primaryLightBlue};
    background: none;
    border: none;
    font-family: 'Fredoka One', cursive;

`

const SpecialStuff = styled.div`
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

    const handleChange = e => {
        setHours(e.target.value)
        e.preventDefault();
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
             <ModalDiv>
                <TimeCollectionDiv>
                    <StyledLabel>{`run collection for `}
                    <StyledInput type="text" maxlength="2" size="2" value={hours} onChange={handleChange} /> 
                    {`${hours > 1 ? 'hours' : 'hour'}`}
                    </StyledLabel>
                    <StyledMinus onClick={decrementHours}/>
                    <StyledPlus onClick={incrementHours}/>
                </TimeCollectionDiv>
                {/* { recentTweets.length > 0 && <Tweets data={recentTweets} selectedTweetIndex={tweetIndex} next={next} previous={previous}/> } */}
                <CollectButton onClick={runCollection}>get those tweets</CollectButton>

             </ModalDiv>
     

        </ContainerDiv>
    )
}

export default ChosenAvatar;