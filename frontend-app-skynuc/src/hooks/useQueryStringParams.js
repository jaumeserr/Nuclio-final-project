import { useLocation } from 'react-router';

export const useQueryParams = () => { 
    new URLSearchParams(useLocation().search);
    const location = useLocation();
    const search = location.search;
    const searchObject = new URLSearchParams(search);
    return searchObject;
};