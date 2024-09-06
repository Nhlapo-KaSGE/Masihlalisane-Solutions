// components/student/homeS.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StudentHomePage = ({ route, navigation }) => {
  const { username } = route.params || {}; // Getting username from navigation params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username || 'Student'}!</Text>
      <Button
        title="View Your Bookings"
        onPress={() => alert('Navigate to Student Bookings')}
      />
      <Button
        title="Logout"
        onPress={() => navigation.navigate('LoginPage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
});

export default StudentHomePage;
