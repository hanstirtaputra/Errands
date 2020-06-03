import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './components/ChatScreen';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import RegistrationScreen from './components/RegistrationScreen';
import RequestsScreen from './components/RequestsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
      <Stack.Screen name='MainScreen' component={MainScreen} />
      <Stack.Screen name='ChatScreen' component={ChatScreen} />
      <Stack.Screen name='RequestsScreen' component={RequestsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});