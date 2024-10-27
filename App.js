import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your components for navigation
import BackgroundPage from './components/BackgroundPage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/login/RegisterPage';
import StudentHomePage from './components/student/homeS';
import LandlordHomePage from './components/landlord/homeL';
import ManagePropertyPage from './components/landlord/manageProp';
import LandlordChatsPage from './components/landlord/chatPageL.js';
import LandlordReviewsPage from './components/landlord/reviewsL';
import FavoritePage from './components/student/favorite';
import Chat from './components/student/chat';
import ReviewsPage from './components/student/reviews';
import MSL from './components/student/MSL.js';
import Setting from './components/landlord/Setting.js'
import SuggestedTenants from './components/landlord/SuggestedTenants.js'
import Pros from './components/student/Pros.js'



// Stack Navigator
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
        <Stack.Screen name="ManagePropertyPage" component={ManagePropertyPage} />
        <Stack.Screen name="LandlordReviewsPage" component={LandlordReviewsPage} />
        <Stack.Screen name="LandlordChatsPage" component={LandlordChatsPage} />
        <Stack.Screen name="FavoritePage" component={FavoritePage} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ReviewsPage" component={ReviewsPage} />
        <Stack.Screen name="MSL" component={MSL} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="SuggestedTenants" component={SuggestedTenants} />
        <Stack.Screen name="Pros" component={Pros} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}






/*import React from 'react';
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
import LandlordHomePage from './components/landlord/Sidebar'; // Import Sidebar
import LandlordHomePage from './components/landlord/PropertyCard'; // Import PropertyCard

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
*/


