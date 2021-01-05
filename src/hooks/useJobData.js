import { useState, useEffect } from 'react';
import axios from 'axios';

const defaultData = [
    { id: 1, query: "barackobama" },
    { id: 2, query: "realdonaldtrump" },
    { id: 3, query: "kamalaharris" }
]

const useJobData = () => {
    const [ loaded, setLoaded ] = useState(false);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        setData(defaultData);
        setLoaded(true)
        // axios.get('http://localhost:8080/')
        //     .then(res => {
        //         setData(res.data)
        //         setLoaded(true)
        //     })
        //     .catch(err => console.log(err))
    }, [])

    console.log(data)

    return { loaded, data }
}

export default useJobData;