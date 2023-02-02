import React from 'react';
import {View, StyleSheet} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
})

export default Header;