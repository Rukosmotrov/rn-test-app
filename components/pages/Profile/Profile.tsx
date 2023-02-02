import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../hooks/typedHooks";
import {profileActions} from "../../../redux/features/profileSlice";
import axios from "axios";
import {authorizationActions} from "../../../redux/features/authorizationSlice";

const Profile = () => {
    const dispatch = useAppDispatch();
    const {email} = useAppSelector(state => state.authorization);
    const {user} = useAppSelector(state => state.profile);

    const getUser = async () => {
        const response = await axios.get(`https://reqres.in/api/users/2`);
        dispatch(profileActions.setUser(response.data.data));
    }

    useEffect(() => {
        getUser();
    }, []);

    const handleLogOut = () => {
        dispatch(authorizationActions.setAuthorized(false));
        dispatch(authorizationActions.setEmail(''));
        dispatch(authorizationActions.setPassword(''));
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: user.avatar}}/>
                <View>
                    <Text style={styles.info}>{`Name: ${user.first_name}`}</Text>
                    <Text style={styles.info}>{`Email: ${email}`}</Text>
                </View>
            </View>
            <Pressable style={styles.button} onPress={handleLogOut}>
                <Text style={{color: 'white'}}>Logout</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaebed',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    info: {
        marginTop: 5
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 20
    },
    button: {
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'teal',
        marginBottom: 30
    }
});

export default Profile;