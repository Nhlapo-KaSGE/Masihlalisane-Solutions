import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegisterPage = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const { userType } = route.params || { userType: '' };

  const handleRegister = () => {
    const emailRegex = userType === 'Student'
      ? /^[a-zA-Z0-9._%+-]+@myuwc\.ac.za$/
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userType === 'Student' && (!name || !surname || !studentNumber || !email)) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (userType === 'Landlord' && (!idNumber || !email)) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Error', `Please enter a valid ${userType} email address.`);
      return;
    }

    const studentData = {
      studentNumber,
      name,
      surname,
      email
    };

    const landlordData = {
      idNumber,
      email
    };

    // For students, generate a password and send it via email
    if (userType === 'Student') {
      fetch('http://192.168.1.125:3000/registerStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      })
        .then(response => response.json().then(data => ({ status: response.status, body: data })))
        .then(({ status, body }) => {
          if (status === 200) {
            Alert.alert('Success', 'Registration successful! A password has been sent to your email.');
            navigation.navigate('LoginPage', { userType });
          } else {
            Alert.alert('Error', body.message || 'Registration failed.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Error', 'An error occurred during registration.');
        });
    }

    // For landlords, verify and handle registration
    //172.25.26.198
    if (userType === 'Landlord') {
      fetch('http://192.168.1.125:3001/verifyLandlord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(landlordData),
      })
        .then(response => response.json().then(data => ({ status: response.status, body: data })))
        .then(({ status, body }) => {
          if (status === 200) {
            Alert.alert('Success', 'Landlord verified successfully! A password has been sent to your email.');
            navigation.navigate('LoginPage', { userType });
          } else {
            Alert.alert('Error', body.message || 'Verification failed.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Error', 'An error occurred during verification.');
        });
    }
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
        {userType === 'Student' && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Student Number"
              placeholderTextColor="#B0B0B0"
              value={studentNumber}
              onChangeText={setStudentNumber}
            />
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
              placeholder="Student Email (@myuwc.ac)"
              placeholderTextColor="#B0B0B0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </>
        )}

        {userType === 'Landlord' && (
          <>
            <TextInput
              style={styles.input}
              placeholder="ID Number"
              placeholderTextColor="#B0B0B0"
              value={idNumber}
              onChangeText={setIdNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#B0B0B0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </>
        )}

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








/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegisterPage = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const { userType } = route.params || { userType: '' };

  const handleRegister = () => {
    const emailRegex = userType === 'Student'
      ? /^[a-zA-Z0-9._%+-]+@myuwc\.ac.za$/
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userType === 'Student' && (!name || !surname || !studentNumber || !email)) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (userType === 'Landlord' && (!idNumber || !email)) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Error', `Please enter a valid ${userType} email address.`);
      return;
    }

    const studentData = {
      studentNumber,
      name,
      surname,
      email
    };

    // For students, generate a password and send it via email
    if (userType === 'Student') {
      fetch('http://172.30.71.56:3000/registerStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      })
        .then(response => response.json().then(data => ({ status: response.status, body: data })))
        .then(({ status, body }) => {
          if (status === 200) {
            Alert.alert('Success', 'Registration successful! A password has been sent to your email.');
            navigation.navigate('LoginPage', { userType });
          } else {
            Alert.alert('Error', body.message || 'Registration failed.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Error', 'An error occurred during registration.');
        });
    }

    // For landlords, handle the registration (add the required code here)
    // ...
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
        {userType === 'Student' && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Student Number"
              placeholderTextColor="#B0B0B0"
              value={studentNumber}
              onChangeText={setStudentNumber}
            />
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
              placeholder="Student Email (@myuwc.ac)"
              placeholderTextColor="#B0B0B0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </>
        )}

        {userType === 'Landlord' && (
          <>
            <TextInput
              style={styles.input}
              placeholder="ID Number"
              placeholderTextColor="#B0B0B0"
              value={idNumber}
              onChangeText={setIdNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#B0B0B0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </>
        )}

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
*/






