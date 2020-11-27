import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: 96,
        width: 96,      
    }
});

function Logo() {
    return (
        <Image
            style={styles.image}
            source={{ uri: "res://drawable/default/youi_logo_red.png" }}
        />
    )
}

export default Logo
