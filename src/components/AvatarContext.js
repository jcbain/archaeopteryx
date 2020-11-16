import Axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AvatarContext = createContext();

const AvatarProvider = props => {
    const { children } = props;
    const [ data, setData ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])


    return (
        <AvatarContext.Provider value={{
            jobData: data
        }}>
            { children }
        </AvatarContext.Provider>
    )
}

export { AvatarContext, AvatarProvider };