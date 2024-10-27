import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Setting = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const toggleDarkTheme = () => setIsDarkThemeEnabled(!isDarkThemeEnabled);

  const handleLogoutButtonPress = () =>{
    navigation.navigate('Setting')
  }


  return (
    <ScrollView style={styles.container}>
      {/* Page Title */}
      <Text style={styles.header}>Settings</Text>

      {/* Notifications Toggle */}
      <View style={styles.settingOption}>
        <Text style={styles.optionLabel}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#007AFF" : "#f4f3f4"}
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>

      {/* Dark Theme Toggle */}
      <View style={styles.settingOption}>
        <Text style={styles.optionLabel}>Dark Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkThemeEnabled ? "#007AFF" : "#f4f3f4"}
          onValueChange={toggleDarkTheme}
          value={isDarkThemeEnabled}
        />
      </View>

      {/* Account Settings */}
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionLabel}>Account Settings</Text>
        <Text style={styles.optionValue}>Edit</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionLabel}>Privacy Policy</Text>
        <Text style={styles.optionValue}>View</Text>
      </TouchableOpacity>

      {/* Help & Support */}
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionLabel}>Help & Support</Text>
        <Text style={styles.optionValue}>Contact</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress = {handleLogoutButtonPress}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles for the Setting Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionLabel: {
    fontSize: 16,
    color: '#333',
  },
  optionValue: {
    fontSize: 14,
    color: '#007AFF',
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Setting;
