import React, { useContext } from 'react';
import styled from 'styled-components';

import useAvatarHover from '../hooks/useAvatarHover';
import { AvatarContext } from './AvatarContext';



const AvatarImg = styled.img`
    width: 100%;
`

const Avatar = props => {
    const { identifier, name, imgNums } = props;
    const spriteName = name.toLowerCase()
    const { setHover, imgIndex } = useAvatarHover(imgNums);
    const { avatarState } = useContext(AvatarContext);
    const { chooseAvatar } = avatarState;



    return (
        <>
            <AvatarImg src={`/assets/sprites/${spriteName}0${imgIndex}.png`} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => chooseAvatar(identifier)}
            />
        </>
    )

}

export default Avatar;

