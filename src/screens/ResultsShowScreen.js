import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = (id) => {
        yelp.get(`/${id}`).then((value) => { setResult(value.data); })

        console.log(result);
    };

    const gerarMapsView = () => {
        const region = {
            latitude: result.coordinates.latitude,
            longitude: result.coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
        const marker = {
            key: Math.floor(Math.random() * 9999),
            coord: {
                latitude: result.coordinates.latitude,
                longitude: result.coordinates.longitude
            },
            title: result.name,
            pinColor: "red"
        }

        navigation.navigate("Maps", { region: region, marker: marker });
    }

    const validatePrice = (price) => {
        if(price === "$"){
            return "Cheap"
        }else if(price === "$$"){
            return "Modarate"
        }else{
            return "Expansive"
        }
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


            {/* {region ? <MapView
                style={styles.mapStyle}
                zoomEnabled={true}
                rotateEnabled={true}
                region={region}>

                {markers ? <Marker
                    key={markers.key}
                    title={markers.title}
                    coordinate={markers.coord}
                    pinColor={markers.pinColor} >
                </Marker> : null}

            </MapView> : null} */}



        </View>
    );
}

const styles = StyleSheet.create({
    containerAddress: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#92ab9e',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        elevation: 10
    },

    containerDescription: {
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#c6d7ec',
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
        marginTop: 20
    },
    image: {
        height: 250,
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