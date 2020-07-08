import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'brazil'
                }
            });
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage("Something went wrong!")
        }

    }

    useEffect(() => {
        searchAPI('');
    }, []);

    return [searchAPI, results, errorMessage];
};