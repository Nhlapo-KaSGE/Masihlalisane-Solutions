import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Get the screen width
const screenWidth = Dimensions.get('window').width;

// Mock data for chats
const chatData = [
  { id: '1', name: 'Aubrey Lucas', message: 'Hi! Yes, we have rooms available.', time: '09:45 AM', unread: false },
  { id: '2', name: 'Ryan Ariaanse', message: 'Let me know when you’d like to visit.', time: '10:30 AM', unread: false },
  { id: '3', name: 'Bryan Daniels', message: 'We have various amenities, feel free to ask.', time: '17:50 PM', unread: false },
  { id: '4', name: 'Zelna Jacobs', message: 'The rent is R500/month.', time: '19:00 PM', unread: false },
];

// Chat component for students
const Chat = () => {
  const renderChatItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Icon name="account-circle" size={40} color="#0056b3" style={styles.profileIcon} /> 
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.landlordName}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={[styles.message, item.unread && styles.unreadMessage]}>{item.message}</Text>
      </View>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00509E',
    marginBottom: 20,
    paddingTop: 20, 
  },
  chatList: {
    paddingBottom: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00509E',
  },
  profileIcon: {
    marginRight: 10,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0056b3',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
  unreadMessage: {
    fontWeight: 'bold',
    color: '#0056b3'
  },
});

export default Chat;
