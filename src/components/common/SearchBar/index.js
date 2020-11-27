import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 5,
        backgroundColor: 'gray'        
    },
    searchInput: {
        height: 25,
        width: 250
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
