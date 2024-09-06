import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackgroundPage from './components/BackgroundPage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/login/RegisterPage';
import StudentHomePage from './components/student/homeS'; // Import StudentHomePage
import LandlordHomePage from './components/landlord/homeL'; // Import LandlordHomePage

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BackgroundPage" component={BackgroundPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="StudentHomePage" component={StudentHomePage} />
        <Stack.Screen name="LandlordHomePage" component={LandlordHomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



