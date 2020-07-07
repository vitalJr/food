import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    console.log(result);

    return (
        <View style={{ marginLeft: 5 }}>
            <Text style={styles.titleStyle}>{result.name}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />

            {/* <Text style={{fontSize:30, fontWeight:'bold',marginTop:10}}>Endereço:</Text> */}
            {result.display_phone ? <Text style={{fontSize:15, fontWeight:'bold'}}>Phone Number: {result.display_phone}</Text> : null}
            <Text style={{fontSize:15, fontWeight:'bold',marginTop:10}}>Address:</Text>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Street: {result.location.address1}</Text>
            <Text style={{fontSize:15, fontWeight:'bold'}}>City: {result.location.city} - {result.location.zip_code}</Text>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Country: {result.location.country}</Text>
            {/* <FlatList
                style={{ marginTop: 20 }}
                data={result.location.display_address}
                keyExtractor={(address) => address}
                renderItem={({ item }) => {
                    return <Text style={styles.address}>{item}</Text>
                }}
            /> */}

        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 15
    },
    address: {
        fontSize: 15,
        color: 'black',
    },
    image: {
        height: 250,
        width: 450,
        // margin: 5,
        borderColor: 'black',
        borderWidth: 1,
        // elevation: 10
    }
})

export default ResultsShowScreen;