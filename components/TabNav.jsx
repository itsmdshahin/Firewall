import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Notification from './Notification';
import Scan from './Scan';
import Profile from './Profile';
import SettingsScreen from './SettingsScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faGear, faHome, faQrcode, faSdCard, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icon you want to use

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'red',
                    showLabel: false,
                    indicatorStyle: { backgroundColor: 'red' },
                    style: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        // color:'yellow',  
                        backgroundColor: '#383B3F',
                        borderRadius: 15,
                        height: 90,
                        ...style.shadow,
                    },
                    headerStyle:{
                        backgroundColor:'red',
                    },                 
                }}
            >
                <Tab.Screen
                    name='Firewall'
                    component={HomeScreen}
                    options={{
                                   
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:'#494C50', padding:2,position:'absolute'}} >
                                    <FontAwesomeIcon style={{color:'white'}} icon={faHome} />
                                </View>
                            );
                        },
                        headerStyle: {
                            backgroundColor: '#383B3F', // Set the background color for the header
                        },
                        headerTintColor: '#F6DB56',
                        headerTitleAlign: 'center',
                    }}
                    
                />
                <Tab.Screen
                    name='Notification'
                    component={Notification}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:'#494C50', padding:2,position:'absolute'}} >
                                    <FontAwesomeIcon style={{ color:'white'}} icon={faBell} />
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name='Scan'
                    component={Scan}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:'#494C50', borderRadius:50, padding:15, marginBottom:20}} >
                                    <FontAwesomeIcon
                                        icon={faQrcode}
                                        size={30}
                                        style={{color:'#F6DB56'}} 
                                    />
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:'#494C50', padding:2,position:'absolute'}} >
                                    <FontAwesomeIcon style={{color:'white'}}  icon={faUser} />
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name='Setting'
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{backgroundColor:'#494C50', padding:2,position:'absolute'}}>
                                    <FontAwesomeIcon style={{color:'white'}} icon={faGear} />
                                </View>
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#989898',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
});

export default TabNav;
