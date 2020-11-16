import Axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

import useJobData from '../hooks/useJobData';

const AvatarContext = createContext();

const AvatarProvider = props => {
    const { children } = props;
    const { loaded, data } = useJobData();
    const [ selectedAvatar, setSelectedAvatar ] = useState();

    const chooseAvatar = (id) => {
        const chosen = data.find(d => d.id === id)
        setSelectedAvatar(chosen)
    }

    return (
        <AvatarContext.Provider value={{
            dataState: { loaded, data },
            avatarState: { selectedAvatar, chooseAvatar }
        }}>
            { children }
        </AvatarContext.Provider>
    )
}

export { AvatarContext, AvatarProvider };