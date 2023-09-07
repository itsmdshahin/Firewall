import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import TabNav from '../components/TabNav';



const Stack = createNativeStackNavigator();

export function Firewall() {

    const HomeScreen = () => {
        const navigation = useNavigation();

        return (
            <View style={styles.dcontainer}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => {
                        // Navigate to the Settings screen.
                        navigation.navigate('Settings');
                    }}
                />

            </View>
        );
    };

    const SettingsScreen = () => {
        const navigation = useNavigation();

        return (
            <View style={styles.dcontainer}>
                <Text>Settings Screen</Text>
                <Button
                    title="Go back to Home"
                    onPress={() => {
                        // Navigate back to the Home screen.
                        navigation.navigate('Filewall');
                    }}
                />
            </View>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Filewall'>
                <Stack.Screen name="Filewall" component={HomeScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    dcontainer: {
        flex: 1,
        backgroundColor: '#383B3F',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
