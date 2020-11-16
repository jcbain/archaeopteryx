import React from 'react';
import styled from 'styled-components';

import useAvatarHover from '../hooks/useAvatarHover';

const AvatarImg = styled.img`
    /* height:  40%; */
`;

const ChosenAvatar = props => {
    const { selectedAvatar, textIds } = props;
    const { id, query } = selectedAvatar;
    const metaData = textIds.find(d => d.id === id);
    const name = metaData.name.toLowerCase()
    const { setHover, imgIndex } = useAvatarHover(metaData.imgNums);


    return (
        <div>
            <AvatarImg src={`/assets/sprites/${name}0${imgIndex}.png`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
             />
        </div>
    )
}

export default ChosenAvatar;