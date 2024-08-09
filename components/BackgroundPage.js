// BackgroundPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icon library

const BackgroundPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.iconWrapper}>
          <Icon name="business" size={50} color="#003366" />
        </View>
        <Text style={styles.logo}>OFF CAMPUS STAY</Text>
      </View>
      <Text style={styles.footer}>Powered by Masihlalisane Solutions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366', // Dark blue background
    position: 'relative', // Positioning context for footer
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 32, // Slightly smaller font size
    fontWeight: '700', // Semi-bold for better readability
    color: '#FFFFFF', // White text
    textAlign: 'center', // Center align text
    //textShadowColor: '#000000', // Shadow color
    //textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    //textShadowRadius: 10, // Shadow blur
    letterSpacing: 2, // Letter spacing for emphasis
    paddingHorizontal: 20, // Padding for better spacing
  },
  iconWrapper: {
    backgroundColor: '#FFFFFF', // White circle background
    borderRadius: 40, // Circle radius
    padding: 10, // Padding around the icon
    marginBottom: 10, // Space between icon and logo text
    shadowColor: '#000000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 10, // Shadow blur
    elevation: 6, // Elevation for Android
  },
  footer: {
    fontSize: 14, // Slightly smaller font size
    color: '#F5F5F5', // Light gray text
    position: 'absolute',
    bottom: 20, // Adjusted from bottom
    textAlign: 'center', // Center align footer text
    width: '100%', // Full width to center text
    paddingHorizontal: 20, // Padding for better visibility
  },
});

export default BackgroundPage;
