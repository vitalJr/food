import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';


const MapsScreen = ({ navigation }) => {
    const region = navigation.getParam("region");
    const marker = navigation.getParam("marker");
    const destLocation = navigation.getParam("destLocation");

    return (
        <MapView
            style={styles.mapStyle}
            zoomEnabled={true}
            showsUserLocation
            region={region}>

            {destLocation &&
                <MapViewDirection
                    origin={region}
                    destination={destLocation}
                    apikey="AIzaSyDVPPEdR9YhkZRdKjFo-VMu1oUvoFXAwHw"
                    strokeWidth={5}
                    strokeColor="#017fc1"
                />

            }

            {marker ? <Marker
                key={marker.key}
                title={marker.title}
                coordinate={marker.coord}
                pinColor={marker.pinColor} >
            </Marker> : null}

        </MapView>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})

export default MapsScreen;