import { useState, useEffect } from 'react';

const useAvatarHover = (imgNums) => {
    const [ hover, setHover ] = useState(false);
    const [ imgIndex, setImgIndex ] = useState(1);

    useEffect(() => {
        if( hover ){
            const timer = setTimeout(() => {
                if( imgIndex < imgNums ){
                    setImgIndex(prev => prev + 1)
                } else {
                    setImgIndex(1)
                }
            }, 100)
            return () => clearTimeout(timer);
        }
    })

    return { setHover, imgIndex };
}

export default useAvatarHover;