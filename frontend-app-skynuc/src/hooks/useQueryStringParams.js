import { useLocation } from 'react-router';

export const useQueryParams = () => { 
    new URLSearchParams(useLocation().search);
    const location = useLocation();
    const search = location.search;
    const searchObject = new URLSearchParams(search);
    console.log('usequeryparams: ', location, search, searchObject.get('startTime'));
    return searchObject;
};