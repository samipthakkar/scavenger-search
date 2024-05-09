import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext("");
const baseUrl = 'https://google-search74.p.rapidapi.com/'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => { // type of results
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers:{
                'X-RapidAPI-Key': '51b83e43a8msh8666b443fe06cd1p1a23c2jsnec603671a6de',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        })
        
        const data = await response.json();
        
        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)
