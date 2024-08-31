// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackgroundPage from './components/BackgroundPage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/login/RegisterPage'; // Import RegisterPage

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BackgroundPage" component={BackgroundPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



