import React from 'react';
import styled from 'styled-components';
import { Tweet } from 'react-twitter-widgets';

const TweetContainerDiv = styled.div`
    grid-area: tweet;
    width: 50%;
`

const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`

const NextButton = styled.button`
    background: ${({theme}) => theme.primaryLightBlue};
    color: ${({theme}) => theme.primaryBrown};
    border: 2px solid ${({theme}) => theme.primaryBrown};
    padding: 5px;
    border-radius: 5px;
    font-family: 'Nunito', sans-serif;
    margin-left: 2px;
    outline: none;
`

const Tweets = (props) => {
    const { data, selectedTweetIndex, next, previous } = props;

    const tweets = data.map((t, i) => {
        return (
            <Tweet key={i} tweetId={t.id} />
        )
    })

    return (
        <TweetContainerDiv>
            <ButtonDiv>
                <NextButton onClick={previous}>previous</NextButton>
                <NextButton onClick={next}>next</NextButton>
            </ButtonDiv>
            { tweets[selectedTweetIndex] }
            
        </TweetContainerDiv>
    )
}

export default Tweets;