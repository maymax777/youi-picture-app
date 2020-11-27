import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 5        
    },
    searchInput: {
        height: 25,
        width: 250,
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'lightgray',
        borderColor: 'gray',
        borderRadius: '20'
    }    
});

function SearchBar() {
    const handleInputChange = () => {}

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.searchInput}
                onChange={handleInputChange}
            />
        </View>
    )
}

export default SearchBar;
