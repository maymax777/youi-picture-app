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
    }    
});

function SearchBar() {
    const handleInputChange = () => {console.log('handleInputChange')}
    const handleInputFocus = () => {console.log('handleInputFocus')}
    const handleInputBlur = () => {console.log('handleInputBlur')}    

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Search...'
                style={styles.searchInput}                
                underlineColorAndroid={true}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </View>
    )
}

export default SearchBar;
