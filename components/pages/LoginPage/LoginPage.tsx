import React from 'react';
import {Text, TextInput, View, StyleSheet, Button, Pressable, Keyboard} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../hooks/typedHooks";
import {authorizationActions} from "../../../redux/features/authorizationSlice";

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const {email, password, errorEmail, errorPassword} = useAppSelector(state => state.authorization);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const validateEmail = () => {
        !reg.test(email)
            ? dispatch(authorizationActions.setErrorEmail(true))
            : dispatch(authorizationActions.setErrorEmail(false))
    }

    const validatePassword = () => {
        password.length < 7
            ? dispatch(authorizationActions.setErrorPassword(true))
            : dispatch(authorizationActions.setErrorPassword(false))
    }

    const handleAuthorize = () => {
        validateEmail();
        validatePassword();
        (reg.test(email) && password.length >= 7)
            && dispatch(authorizationActions.setAuthorized(true))
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder={'Email'}
                    style={errorEmail ? styles.errorInput : styles.input}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    textContentType={'emailAddress'}
                    value={email}
                    onChangeText={text => {
                        dispatch(authorizationActions.setEmail(text));
                        validateEmail();
                    }}
                    keyboardType={'email-address'}
                    onBlur={() => {
                        errorEmail && setTimeout(() => {
                            dispatch(authorizationActions.setErrorEmail(false))
                        }, 3000)
                    }}
                />
                <Text style={styles.errorText}>{errorEmail && 'Email is not valid'}</Text>
            </View>
            <View>
                <TextInput
                    placeholder={'Password'}
                    style={errorPassword ? styles.errorInput : styles.input}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    textContentType={'password'}
                    value={password}
                    onChangeText={text => {
                        dispatch(authorizationActions.setPassword(text));
                        validatePassword();
                    }}
                    secureTextEntry={true}
                    onBlur={() => {
                        errorPassword && setTimeout(() => {
                            dispatch(authorizationActions.setErrorPassword(false))
                        }, 3000)
                    }}
                />
                <Text style={styles.errorText}>{errorPassword && 'Password length min 8 chars'}</Text>
            </View>

            <Pressable style={styles.button} onPress={handleAuthorize}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        padding: 40,
        marginBottom: 100
    },
    input: {
        width: '100%',
        padding: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'teal',
    },
    text: {
        color: 'white'
    },
    errorInput: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#c50707',
        width: '100%',
        padding: 10,
        marginBottom: 20,
    },
    errorText: {
        color: '#c50707',
        marginBottom: 20,
    }
})

export default LoginPage;