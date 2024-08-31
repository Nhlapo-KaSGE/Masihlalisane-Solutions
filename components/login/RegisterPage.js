// RegisterPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icon library

const RegisterPage = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const { userType } = route.params || { userType: '' };

  const handleRegister = () => {
    const emailRegex = userType === 'Student'
      ? /^[a-zA-Z0-9._%+-]+@myuwc\.ac$/
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !surname || !phoneNumber || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Error', `Please enter a valid ${userType} email address.`);
      return;
    }

    // Registration logic here
    Alert.alert('Success', 'Registration successful!');
    // Navigate to login page or other actions
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon name="business" size={80} color="#003366" />
        </View>
        <Text style={styles.title}>{userType} Registration</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#B0B0B0"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          placeholderTextColor="#B0B0B0"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.input}
          placeholder="ID NUMBER"
          placeholderTextColor="#B0B0B0"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder={userType === 'Student' ? "Student Email (@myuwc.ac)" : "Email"}
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#003366',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
});

export default RegisterPage;
