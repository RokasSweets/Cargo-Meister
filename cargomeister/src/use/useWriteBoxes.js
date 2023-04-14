import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/boxes';


export const useWriteBoxes = _ => {

    const [response, setResponse] = useState(null);
    const [create, setCreate] = useState(null);
    const [destroy, setDelete] = useState(null);


    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post(URL, create, { withCredentials: true })
            .then(res => setResponse(res.data));

    }, [create]);

    useEffect(() => {
        if (null === destroy) {
            return;
        }
        axios.delete(URL + '/' + destroy.id, { withCredentials: true })
            .then(res => setResponse(res.data));

    }, [destroy]);


    return [response, setCreate, setDelete];

}