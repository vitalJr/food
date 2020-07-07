import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';



const SearhcBar = ({ term, onTermChange,onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                style={styles.textInpuStyle}
                placeholder="Search"
                onEndEditing={onTermSubmit}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: 'gray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom:10
    },
    textInpuStyle: {
        fontSize: 20,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearhcBar;