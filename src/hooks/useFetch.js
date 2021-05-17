import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setPeople, setFailPeople } from '../redux/actions/peopleActions';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);
    useEffect(() => {
        const fetchPeople = async () => {
            const response = await axios.get(url).catch((err) => {
                dispatch(setFailPeople());
            });
            dispatch(setPeople(response.data.results));
        };
        if (isMounted.current) {
            fetchPeople();
        }
    }, [url, dispatch]);
};
