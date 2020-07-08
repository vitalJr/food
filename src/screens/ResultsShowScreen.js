import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = (id) => {
        yelp.get(`/${id}`).then((value) => { setResult(value.data); })

        console.log(result);
    };

    const gerarMapsView = () => {
        const region = {}
        navigator.geolocation.getCurrentPosition(
            //Will give you the current location
            position => {
                region = {
                    // latitude: result.coordinates.latitude,
                    // longitude: result.coordinates.longitude,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }
            },
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );

        // const region = {
        //     // latitude: result.coordinates.latitude,
        //     // longitude: result.coordinates.longitude,
        //     latitude: -23.5839093,
        //     longitude: -46.6278785,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421
        // }

        const marker = {
            key: Math.floor(Math.random() * 9999),
            coord: {
                latitude: result.coordinates.latitude,
                longitude: result.coordinates.longitude
            },
            title: result.name,
            pinColor: "red"
        }

        const destLocation = {
            latitude: result.coordinates.latitude,
            longitude: result.coordinates.longitude,
        }

        console.log(region);

        navigation.navigate("Maps", { region, marker, destLocation });
    }

    const validatePrice = (price) => {
        if (price === "$") {
            return "Cheap"
        } else if (price === "$$") {
            return "Modarate"
        } else {
            return "Expensive"
        }
    }

    const geolocation = () => {
        navigator.geolocation.getCurrentPosition(
            //Will give you the current location
            position => {
                console.log(position);
            },
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

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

            <View style={styles.containerAddress}>
                {result.display_phone ? <Text style={styles.addressTextStyle}>Phone Number: {result.display_phone}</Text> : null}
                <Text style={styles.addressTextStyle}>Street: {result.location.address1}</Text>
                <Text style={styles.addressTextStyle}>City: {result.location.city} - {result.location.zip_code}</Text>
                <Text style={styles.addressTextStyle}>Country: {result.location.country}</Text>
            </View>

            <View style={styles.containerDescription}>
                <Text style={styles.titleDescriptionStyle}>Description</Text>
                <Text >Review: {result.review_count}</Text>
                <Text >Stars: {result.rating}</Text>
                <Text >Price: {validatePrice(result.price)}</Text>
            </View>

            <TouchableOpacity
                onPress={() => gerarMapsView()}
                style={styles.buttonMaps}>
                <Text style={styles.textButtonMaps}>View Maps</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    containerAddress: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#d32323',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        elevation: 10
    },

    containerDescription: {
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#bdb80f',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        elevation: 10
    },
    titleDescriptionStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
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
    addressTextStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonMaps: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        height: 230,
        width: 450,
        borderColor: 'black',
        borderWidth: 1,
    },
    textButtonMaps: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#046ec9'
    }
})

export default ResultsShowScreen;