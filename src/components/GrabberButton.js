import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
    color: white;
    width: 20vw;
    height: 10vh;
    background: palevioletred;
    border: 0px solid palevioletred;
    font-size: 20px;
    text-decoration: none;
    /* clip-path: polygon(  
        0 5%,
        5% 5%,
        5% 0,
        90% 0,
        100% 10%,
        100% 90%,
        90% 100%,
        10% 100%,
        0% 90%,
        0% 10%) */
`

const AvatarImg = styled.img`
    height: 25%;
`



const GrabberButton = props => {
    const { identifier, name, imgNums } = props;
    const spriteName = name.toLowerCase()
    const [ hover, setHover ] = useState(false);
    const [ imgIndex, setImgIndex ] = useState(1)

    useEffect(() => {
        if(hover){
            const timer = setTimeout(() => {
                if(imgIndex < imgNums){
                    setImgIndex(prev => prev + 1) 
                } else {
                    setImgIndex(1)
                }
            }, 100)
            return () => clearTimeout(timer);
        }

    })

    const handleClick = e => {
        e.preventDefault();
        axios.post(`/${identifier}`, { name: name})
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }


    return (
        <>
            <AvatarImg src={`/assets/sprites/${spriteName}0${imgIndex}.png`} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}/>
            {/* <Button onClick={handleClick}>{name}</Button> */}
        </>
    )

}

export default GrabberButton;

