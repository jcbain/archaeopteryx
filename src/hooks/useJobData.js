import { useState, useEffect } from 'react';
import axios from 'axios';

const useJobData = () => {
    const [ loaded, setLoaded ] = useState(false);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(res => {
                setData(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    return { loaded, data }
}

export default useJobData;