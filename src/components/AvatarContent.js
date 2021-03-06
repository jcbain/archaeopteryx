import React, { useContext } from 'react';
import styled from 'styled-components';

import Avatars from './Avatars'
import ChosenAvatar from './ChosenAvatar';
import { AvatarContext } from './AvatarContext';

const ContentDiv = styled.div`
    display: grid;
    grid-template-columns: .25fr 1fr;
    grid-template-rows: 80vh;
    margin-top: 10vh;
`;

const AvatarContent = (props) => {
    const { dataState, avatarState } = useContext(AvatarContext);
    const { loaded, data } = dataState;
    const { selectedAvatar, requestQuery, setRequestQuery  } = avatarState;

    const textIds = [
        {id: 1, name: 'Obama', imgNums: 3},
        {id: 2, name: 'Trump', imgNums: 3},
        {id: 3, name: 'Harris', imgNums: 2}
    ]

    return (
        <ContentDiv>
            {loaded && <Avatars data={data} textIds={textIds}/>}
            {selectedAvatar && <ChosenAvatar selectedAvatar={selectedAvatar} textIds={textIds} requestQuery={requestQuery} setRequestQuery={setRequestQuery} />}
        </ContentDiv>
    )
}

export default AvatarContent;