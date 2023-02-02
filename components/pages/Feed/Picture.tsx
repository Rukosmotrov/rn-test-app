import React, {useEffect} from 'react';
import {Image, View, Text, StyleSheet} from "react-native";
import {IPicture} from "./Feed";

const Picture = ({item}: {item: IPicture}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.download_url}}/>
            <View style={styles.authorName}>
                <Text style={styles.text}>{item.author}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
        marginHorizontal: 16,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    authorName: {
        position: 'absolute',
        zIndex: 1,
        padding: 10,
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.63)',
        borderRadius: 10,
    },
    text: {
        color: 'white'
    }
})

export default Picture;