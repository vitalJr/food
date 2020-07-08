import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const MapsScreen = ({ navigation }) => {
    const region = navigation.getParam("region");
    const marker = navigation.getParam("marker");

    return (
        <MapView
            style={styles.mapStyle}
            zoomEnabled={true}
            rotateEnabled={true}
            region={region}>

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