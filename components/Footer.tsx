import React from 'react';
import {View, StyleSheet} from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>

        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#2a3240',
        paddingBottom: 10
    },
})

export default Footer;