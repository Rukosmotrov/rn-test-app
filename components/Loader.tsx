import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";

const Loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size={'large'} color={'#aaa'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        marginVertical: 16,
        alignItems: 'center'
    }
})

export default Loader;