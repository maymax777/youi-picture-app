import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../../components/common/Logo';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e6e7e7",
        flex: 1
    }
});

function App() {
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    )
}

export default App;
