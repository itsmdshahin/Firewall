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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Firewall, Home } from './src/Firewall';
import TabNav from './components/TabNav';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Firewall /> */}
      <TabNav />
      {/* <Button title='helow' /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383B3F',
  },
  
});
