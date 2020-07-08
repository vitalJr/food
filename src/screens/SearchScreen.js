import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearhcBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';



const SearhcScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearhcBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)}
            />

            {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
            {/* <Text>We have found {results.length} results</Text> */}

            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice("$")}
                     />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultsByPrice("$$")}
                     />
                <ResultsList
                    title="Big Spender"
                    results={filterResultsByPrice("$$$")}
                     />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default SearhcScreen;