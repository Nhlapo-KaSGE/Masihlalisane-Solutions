import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackgroundPage from './components/BackgroundPage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/login/RegisterPage';
import StudentHomePage from './components/student/homeS'; // Import StudentHomePage
import LandlordHomePage from './components/landlord/homeL'; // Import LandlordHomePage
import FavoritePage from './components/student/favorite'; // Import the FavoritePage
import ChatPage from './components/student/chat'; // Import the FavoritePage
import ReviewsPage from './components/student/reviews'; // Import the FavoritePage

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
        <Stack.Screen name="favoritePage" component={FavoritePage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="ReviewsPage" component={ReviewsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



