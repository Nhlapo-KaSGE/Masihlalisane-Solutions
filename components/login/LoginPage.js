import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginPage = ({ route, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userType } = route.params || { userType: '' };

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const loginData = {
      username,
      password,
      userType
    };

    const endpoint = 'http://192.168.179.31:3002/login';
    //192.168.179.31
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(response => response.json().then(data => ({ status: response.status, body: data })))
      .then(({ status, body }) => {
        if (status === 200) {
          Alert.alert('Success', 'Login successful!');
          if (userType === 'Student') {
            navigation.navigate('StudentHomePage', { studentNumber: username });
          } else if (userType === 'Landlord') {
            navigation.navigate('LandlordHomePage', { idNumber: username });
          }
        } else {
          Alert.alert('Error', body.message || 'Login failed.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred during login.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon name="business" size={80} color="#003366" />
        </View>
        <Text style={styles.title}>{userType} Login</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={userType === 'Student' ? 'Student Number' : 'ID Number'}
          placeholderTextColor="#B0B0B0"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#B0B0B0"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => navigation.navigate('RegisterPage', { userType })}
        >
          <Icon name="person-add" size={20} color="#FFFFFF" />
          <Text style={styles.registerText}> New here? Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
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
  registerLink: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10,
    textDecorationLine: 'underline',
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

export default LoginPage;
