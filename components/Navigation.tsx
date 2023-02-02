import React from 'react';
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {useAppSelector} from "../hooks/typedHooks";
import LoginPage from "./pages/LoginPage/LoginPage";

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
    const {authorized} = useAppSelector(state => state.authorization);

    if (authorized) {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Feeds' component={Feed}/>
                    <Tab.Screen name='Profile' component={Profile}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <LoginPage/>
        );
    }
};

export default Navigation;